import React from 'react'
import {Text,
        View,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput,
		Alert,
		Dimensions
} from 'react-native'

import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'


import EachCatg from '../components/EachCatg'


export default class Filter extends React.Component {
	constructor(props){
        super(props)
        this.state = {
			searchTxt: '',
			catgArray: this.props.categories,
			iconTop: 'suitcase',
			textTop: 'Produtos',
			idCatg: null,
			idSub: null,
			min: 0,
			value: 1000,
			max: 1000,
			selected: false
        }
    }

	componentDidMount() {
		setTimeout(() => {
			this.setState({ catgArray: this.props.categories })
		}, 500);	
	}

	changeArray = (idC, name) => {
		//check if it is category or not
		const a = this.props.categories.some(element => {
			if (element.name == name) {
			  return true;
			}
		  });

		//if it is then let do his process else do subcatg process
		if (a){
			let filtered = this.props.subcategories.filter(function (el)
			{
				return el.id_catg == idC
				}
			)
			this.setState({ catgArray: filtered, textTop: name, idCatg: idC })
		} else {
			this.setState({ idSub: idC })
		}
	}
	
	fuckGoBack = () => {
		this.setState({ 
			catgArray: this.props.categories,
			textTop: 'Produtos',
			idCatg: null,
			idSub: null,
			selected: false
		 })
	}

	pesquisar = () => {
		let pesquisa = ({
			searchTxt: this.state.searchTxt,
			subcatg: this.state.idSub ?? null,
			catg: this.state.idCatg ?? null,
			min_price: this.state.min ?? null,
			max_price: this.state.value ?? null
		})
		this.props.onSave(pesquisa)
	}

	cancelar = () => {
		this.setState({
			searchTxt: '',
			catgArray: this.props.categories,
			iconTop: 'suitcase',
			textTop: 'Produtos',
			idCatg: null,
			idSub: null,
			min: 0,
			value: 1000,
			max: 1000,
			selected: false
		})
		this.props.onCancel()
	}

	refresh = () => {
		this.setState({
			searchTxt: '',
			catgArray: this.props.categories,
			iconTop: 'suitcase',
			textTop: 'Produtos',
			idCatg: null,
			idSub: null,
			min: 0,
			value: 1000,
			max: 1000,
			selected: false
		})
	}
    
    render() {
        return(
			<Modal visible={this.props.isVisible} animationType='slide'  onRequestClose={() => this.props.onCancel()}>
				<View style={ { height: Dimensions.get('screen').height, width: Dimensions.get('screen').width, backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
					<TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: 10, paddingRight: 10 }} onPress={() => this.refresh()} >
						<Icon2 name='refresh-circle' size={30} style={{ color: this.props.themeMode ? Theme.backDark : Theme.branco }} />
					</TouchableOpacity>
					<View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
						<View style={{ backgroundColor: '#555555', width: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
							<Icon2 name='filter' size={70} style={{ color: this.props.themeMode ? Theme.branco : Theme.backDark, paddingTop: 4, paddingLeft: 6 }} />
						</View>
						<Text style={{ fontSize: 27, textAlign: 'center', color: this.props.themeMode ? Theme.preto : Theme.branco, marginLeft: 35 }}>Pesquisa{"\n"}Avançada</Text>
					</View>
					<View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'space-around' }}>
						<View style={{ flexDirection: 'row', width: '74%' }}>
							<TextInput 
								style={{ borderBottomColor: this.props.themeMode ? Theme.preto : 'white', borderBottomWidth: 1, width: '95%', fontSize: 17, color: this.props.themeMode ? Theme.preto : Theme.branco }} 
								placeholder='Nome do produto ou empresa' 
								placeholderTextColor={'#C4C4C4'} 
								value={this.state.searchTxt}
								onChangeText={txt => this.setState({ searchTxt: txt })}
							/>
							<Icon2 name='search' size={24} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
						</View>
						<View style={{ height: '75%', width: '80%', backgroundColor: '#C4C4C4', borderRadius: 20, overflow: 'hidden'}} >
							<View style={{ width: '100%', height: '20%', paddingBottom: 10, overflow: 'hidden' }}>
								<View style={{ flexDirection: 'row', alignItems: 'center', elevation: 8, width: '100%', height: '100%', backgroundColor: '#D1D1D1' }}>
									{ !this.state.idCatg ?
										<View style={{ backgroundColor: 'white', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50, marginLeft: 20 }}>
											<Icon3 name='suitcase' size={25} style={{ color: 'black' }} />
										</View>
										:
										<TouchableOpacity style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50, marginLeft: 20 }} activeOpacity={0.7} onPress={() => this.fuckGoBack()} >
											<Icon3 name='arrow-left' size={25} style={{ color: 'black' }} />
										</TouchableOpacity>
									}
									<Text style={{ fontSize: 22, color: Theme.preto, marginLeft: 10 }}>{this.state.textTop}</Text>
								</View>
							</View>
							<FlatList
								contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', flex: 1}}
								style={{ alignContent: 'space-around' }}
								data={this.state.catgArray}
								numColumns={3}
								keyExtractor={item => `${item.id}`} 
								renderItem={({item}) => <EachCatg selected={this.state.idSub} id={item.id} category={item.name} icon='react' onAdicionarStack={() => this.changeArray(item.id, item.name)}/>} 
							/>
						</View>
						<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
							<Text style={{ fontSize: 20, color: this.props.themeMode ? Theme.preto : Theme.branco }} >Preço</Text>
							<Slider
								style={{width: 200, marginTop: 5}}
								step={1}
								minimumValue={this.state.min}
								maximumValue={1000}
								value={this.state.value}
								onValueChange={value => this.setState({ max: value })}
								onSlidingComplete={value => this.setState({ value: value })}
								minimumTrackTintColor="#C4C4C4"
								maximumTrackTintColor="#FFFFFF"
								thumbTintColor='white'
							/>
							<Text style={{ fontSize: 18, color: this.props.themeMode ? Theme.preto : Theme.branco, width: 56, textAlign: 'center', marginTop: 3 }} >{this.state.value}€</Text>
						</View>
					</View>
					<View style={{ height: '20%', width: '100%', alignItems: 'center', paddingTop: 20 }}>
						<TouchableOpacity style={{ width: 174, height: 40, borderRadius: 20, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center', marginBottom: 15}} onPress={() => this.pesquisar()} activeOpacity={0.7} >
							<Text style={{ fontSize: 18, color: this.props.themeMode ? Theme.branco : Theme.backDark }} >Pesquisar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ width: 120, height: 40, borderRadius: 20, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.cancelar()} activeOpacity={0.7} >
							<Text style={{ fontSize: 18, color: this.props.themeMode ? Theme.branco : Theme.backDark }} >Cancelar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		)
    }
}