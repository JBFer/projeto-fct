import React from 'react'
import {Text,
        View,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput,
		Alert
} from 'react-native'

//import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import FilterStyle from '../styles/FilterStyle'
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
		if( this.state.idCatg && !this.state.idSub ){
			Alert.alert('Aviso', 'Para efetuar a pesquisa selecione uma das subcategorias' )
		} else {
			let pesquisa = ({
				searchTxt: this.state.searchTxt,
				subcatg: this.state.idSub ?? null
		   })
			this.props.onSave(pesquisa)
		}
	}

	cancelar = () => {
		this.setState({
			searchTxt: '',
			catgArray: this.props.categories,
			iconTop: 'suitcase',
			textTop: 'Produtos',
			idCatg: null,
			idSub: null,
			selected: false
		})
		this.props.onCancel()
	}
    
    render() {
        return(
			<Modal visible={this.props.isVisible} animationType='slide'>
				<View style={ { height: 880, width: '100%', backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
					<View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
						<View style={{ backgroundColor: '#555555', width: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
							<Icon2 name='filter' size={70} style={{ color: this.props.themeMode ? Theme.branco : Theme.backDark, paddingTop: 4, paddingLeft: 6 }} />
						</View>
						<Text style={{ fontSize: 27, textAlign: 'center', color: this.props.themeMode ? Theme.preto : Theme.branco, marginLeft: 35 }}>Pesquisa{"\n"}Avançada</Text>
					</View>
					<View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
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
						<View style={{ height: '65%', width: '80%', backgroundColor: '#C4C4C4', borderRadius: 20, overflow: 'hidden', marginBottom: 20 }} >
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
								style={{ flexDirection: 'row' }}
								contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '100%'}}
								data={this.state.catgArray}
								numColumns={3}
								keyExtractor={item => `${item.id}`} 
								renderItem={({item}) => <EachCatg id={item.id} category={item.name} icon='react' onAdicionarStack={() => this.changeArray(item.id, item.name)}/>} 
							/>
						</View>
					</View>
					<View style={{ flex: 0.7, alignItems: 'center' }}>
						<TouchableOpacity style={{ width: 174, height: 40, borderRadius: 20, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }} onPress={() => this.pesquisar()} activeOpacity={0.7} >
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
