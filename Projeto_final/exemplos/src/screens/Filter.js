import React from 'react'
import {Text,
        View,
        StyleSheet,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput
} from 'react-native'

import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import FilterStyle from '../styles/FilterStyle'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'


import EachCatg from '../components/EachCatg'
import Catgs from '../data/catgs/Categorias'

const initialState = {
	primeiroIcon: 'industry',
	primeiroCatg: 'Empresas',
}

export default class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            price: 200,
            minPrice: 0,
            maxPrice: 200,
            backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColorCaixa: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 0,
            borderTopRight: 0,
			sbrCatg: false,
			primeiro: false,
			segundo: false,
			terceiro: false,
			stack: [],
			...initialState
        }
    }
	
	adicionarStack = (idCatg) => {
		const stack = [ ...this.state.stack ]
        stack.push({
            id: idCatg.id,
			icon: idCatg.icon,
			category: idCatg.category
        })
		
		this.setState({ primeiroIcon: idCatg.icon, primeiroCatg: idCatg.category })
		
		this.setState({ stack }, this.mudarCor)
	}
	
    
    mudarCor = () => {
        this.setState({
            backgroundColorCaixa: 'lightblue',
            backgroundColor: 'lightblue',
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 0,
            borderTopRight: 10,
			sbrCatg: true,
			primeiro: true,
			segundo: false,
			terceiro: false
        })
    }
    
    mudarCor2 = () => {
        this.setState({
            backgroundColorCaixa: '#badf55',
            backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor2:'#badf55',
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 10,
            borderTopRight: 10,
			sbrCatg: true,
			primeiro: false,
			segundo: true,
			terceiro: false
        })
    }
    
    mudarCor3 = () => {
        this.setState({
            backgroundColorCaixa: '#f7e88a',
            backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3:'#f7e88a',
            borderTopLeft: 10,
            borderTopRight: 0,
			sbrCatg: true,
			primeiro: false,
			segundo: false,
			terceiro: true
        })
    }
    
    
    cancel = () => {
        this.setState({
			price: 200,
            minPrice: 0,
            maxPrice: 200,
            backgroundColor: '',
            backgroundColorCaixa: '',
            backgroundColor2: '',
            backgroundColor3: '',
			borderTopLeft: 0,
            borderTopRight: 0,
			sbrCatg: false,
			primeiro: false,
			segundo: false,
			terceiro: false,
			...initialState
        })
        this.props.onCancel()
    }
    
    render() {
        return(
        <Modal visible={this.props.isVisible} animationType='slide'>
            <View style={ { flex: 1, backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
                <View style={ FilterStyle.titlePart }>
                    <Text style={[ FilterStyle.title, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]} >Pesquisa Avançada</Text>
                </View>

                <View style={ FilterStyle.topPart }>
                    <TextInput style={ [FilterStyle.input, { color: this.props.themeMode ? Theme.preto : Theme.branco , borderBottomColor: this.props.themeMode ? Theme.preto : Theme.branco } ]} />
                    <Icon2 name='search' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
                </View>
                <View style={ FilterStyle.middlePart }>
                    <View style={ FilterStyle.topCatg }>
                        <TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor } ]} onPress={() => { this.mudarCor() }} activeOpacity={0.9}>
                            <Icon3 name={this.state.primeiroIcon} size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, padding: 20, borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
                            <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{ this.state.primeiroCatg }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor2 } ]} onPress={() => { this.mudarCor2() }} activeOpacity={0.9}>
                            <Icon3 name='suitcase' size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, padding: 20, borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
                            <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>Produtos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor3 } ]} onPress={() => { this.mudarCor3() }} activeOpacity={0.9}>
                            <Icon3 name='fire-alt' size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
                            <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>Em alta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[ FilterStyle.downCatg, { backgroundColor:this.state.backgroundColorCaixa, borderTopLeftRadius:this.state.borderTopLeft, borderTopRightRadius:this.state.borderTopRight } ]}>
						{ this.state.segundo &&
							<View>
								<View style={ FilterStyle.pricePart }>
									<Text style={ [FilterStyle.secondaryTxt, { color: Theme.preto} ]}>Preço</Text>
									<Slider
										style={{ width: 280}}
											step={5}
											minimumValue={this.state.minPrice}
											maximumValue={this.state.maxPrice}
											value={this.state.price}
											onValueChange={val => this.setState({ price: val })}
											maximumTrackTintColor='#04d9ff' 
											minimumTrackTintColor='#00C0F9'
									/>
								</View>
								<View style={ FilterStyle.rangePrice }>
									<Text style={{ color: Theme.preto }}>{this.state.minPrice}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.price}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.maxPrice}€</Text>
								</View>
							</View>
						}
						{ this.state.terceiro &&
							<View>
								<View style={ FilterStyle.pricePart }>
									<Text style={ [FilterStyle.secondaryTxt, { color: Theme.preto} ]}>Preço</Text>
									<Slider
										style={{ width: 280}}
											step={5}
											minimumValue={this.state.minPrice}
											maximumValue={this.state.maxPrice}
											value={this.state.price}
											onValueChange={val => this.setState({ price: val })}
											maximumTrackTintColor='#04d9ff' 
											minimumTrackTintColor='#00C0F9'
									/>
								</View>
								<View style={ FilterStyle.rangePrice }>
									<Text style={{ color: Theme.preto }}>{this.state.minPrice}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.price}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.maxPrice}€</Text>
								</View>
							</View>
						}
						{ this.state.sbrCatg &&
							<FlatList 
							style={{ flex: 1, flexDirection: 'row' }}
							contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-around', width: '100%'}}
							data={Catgs}
							numColumns={3}
							keyExtractor={item => `${item.id}`} 
							renderItem={({item}) => <EachCatg id={item.id} category={item.category} icon={item.icon} onAdicionarStack={(idCatg) => this.adicionarStack(idCatg)}/>} 
							/>
						}
                    </View>
                </View>
                
                <View style={ FilterStyle.btnBoth }>
                    <TouchableOpacity onPress={() => { this.cancel() }} style={[ FilterStyle.btnCancel, { borderColor: this.props.themeMode ? Theme.preto : Theme.branco } ]}>
                        <Text style={[ FilterStyle.cancelTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ FilterStyle.btnSearch, { borderColor: this.props.themeMode ? Theme.preto : Theme.branco } ]}>
                        <Text style={[ FilterStyle.cancelTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Procurar</Text>
                        <Icon3 name='angle-right' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, paddingLeft: 10, marginTop: 3 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
    }
}
