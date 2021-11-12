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
import CatgsEmpresas from '../data/catgs/CategoriasEmpresas'
import CatgsProdutos from '../data/catgs/CategoriasProdutos'
import CatgsEmAlta from '../data/catgs/CategoriasEmAlta'

const initialState = {
	primeiroIcon: 'suitcase',
	primeiroCatg: 'Produtos',
}

export default class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
			searchTxt: '',
            priceProd: 200,
            minPriceProd: 0,
            maxPriceProd: 200,
            priceAlta: 200,
            minPriceAlta: 0,
            maxPriceAlta: 200,
			topBackgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColorCaixa: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 0,
            borderTopRight: 0,
			show: false,
			primeiro: false,
			segundo: false,
			terceiro: false,
			stack: [],
			...initialState
        }
    }
	
	adicionarStack = (idCatg) => {
		if (this.state.segundo){
			const stack = [ ...this.state.stack ]
			stack.push({
				id: idCatg.id,
				icon: idCatg.icon,
				category: idCatg.category
			})

			this.setState({ 
				primeiroIcon: idCatg.icon, 
				primeiroCatg: idCatg.category,
				borderTopLeft: 0,
            	borderTopRight: 0,
				show: true
			})

			this.setState({ stack })
			
		}
	}
	
    
    mudarCor = () => {
        this.setState({
            backgroundColorCaixa: 'lightblue',
            backgroundColor: 'lightblue',
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 0,
            borderTopRight: 15,
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
            borderTopLeft: 15,
            borderTopRight: 15,
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
            borderTopLeft: 15,
            borderTopRight: 0,
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
			primeiro: false,
			segundo: false,
			terceiro: false,
			searchTxt: '',
			stack: [],
			show: false,
			...initialState
        })
        this.props.onCancel()
    }
	
	fuckGoBack = () => {
		console.warn('ir para tras')
	}
	
	save = () => {
		const pesquisa = ({
            stack: this.state.stack,
			searchTxt: this.state.searchTxt,
			price: this.state.priceProd
        })
		
        this.props.onSave(pesquisa)
    }
    
    render() {
        return(
        <Modal visible={this.props.isVisible} animationType='slide'>
            <View style={ { flex: 1, backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
                <View style={ FilterStyle.titlePart }>
                    <Text style={[ FilterStyle.title, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]} >Pesquisa Avançada</Text>
                </View>

                <View style={ FilterStyle.topPart }>
                    <TextInput
						style={ [FilterStyle.input, { color: this.props.themeMode ? Theme.preto : Theme.branco , borderBottomColor: this.props.themeMode ? Theme.preto : Theme.branco } ]}
						value={this.state.searchTxt}
						onChangeText={txt => this.setState({ searchTxt: txt })}
						/>
                    <Icon2 name='search' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
                </View>
                <View style={ FilterStyle.middlePart }>
					{ !this.state.show &&
						<View style={[ FilterStyle.topCatg ]}>
							<TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor } ]} onPress={() => { this.mudarCor() }} activeOpacity={0.9}>
								<Icon3 name='industry' size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
								<Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>Empresa</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor2 } ]} onPress={() => { this.mudarCor2() }} activeOpacity={0.9}>
								<Icon3 name={this.state.primeiroIcon} size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
								<Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{ this.state.primeiroCatg }</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor3 } ]} onPress={() => { this.mudarCor3() }} activeOpacity={0.9}>
								<Icon3 name='fire-alt' size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
								<Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>Em alta</Text>
							</TouchableOpacity>
						</View>
					}
					{ this.state.show &&
						<View style={[ FilterStyle.topCatg2 ]}>
							<TouchableOpacity onPress={() => this.fuckGoBack()} style={{ marginLeft: 20 }}>
								<Icon3 name='angle-left' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, paddingLeft: 10, marginTop: 3 }} />
							</TouchableOpacity>
							<TouchableOpacity disabled={this.state.show} style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor2, alignItems: 'center' } ]} onPress={() => { this.mudarCor2() }} activeOpacity={0.2}>
								<Icon3 name={this.state.primeiroIcon} size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
								<Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{ this.state.primeiroCatg }</Text>
							</TouchableOpacity>
						</View>
					}
                    <View style={[ FilterStyle.downCatg, { backgroundColor:this.state.backgroundColorCaixa, borderTopLeftRadius:this.state.borderTopLeft, borderTopRightRadius:this.state.borderTopRight } ]}>
						{ this.state.segundo &&
							<View style={{ flex: 1 }}>
								<View style={ FilterStyle.pricePart }>
									<Text style={ [FilterStyle.secondaryTxt, { color: Theme.preto} ]}>Preço</Text>
									<Slider
										style={{ width: 280}}
											step={5}
											minimumValue={this.state.minPriceProd}
											maximumValue={this.state.maxPriceProd}
											value={this.state.priceProd}
											onValueChange={val => this.setState({ priceProd: val })}
											maximumTrackTintColor='#04d9ff' 
											minimumTrackTintColor='#00C0F9'
									/>
								</View>
								<View style={ FilterStyle.rangePrice }>
									<Text style={{ color: Theme.preto }}>{this.state.minPriceProd}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.priceProd}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.maxPriceProd}€</Text>
								</View>
								<FlatList 
									style={{ flexDirection: 'row' }}
									contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-around', width: '100%'}}
									data={CatgsProdutos}
									numColumns={3}
									keyExtractor={item => `${item.id}`} 
									renderItem={({item}) => <EachCatg id={item.id} category={item.category} icon={item.icon} onAdicionarStack={(idCatg) => this.adicionarStack(idCatg)}/>} 
								/>
							</View>
						}
						{ this.state.terceiro &&
							<View>
								
								<FlatList 
									style={{ flexDirection: 'row', marginTop: 33.7, marginBottom: 20}}
									contentContainerStyle={{ alignItems: 'center', width: '100%'}}
									data={CatgsEmAlta}
									numColumns={3}
									keyExtractor={item => `${item.id}`} 
									renderItem={({item}) => <EachCatg id={item.id} category={item.category} icon={item.icon} onAdicionarStack={(idCatg) => this.adicionarStack(idCatg)}/>} 
								/>
								
								<View style={ FilterStyle.pricePart }>
									<Text style={ [FilterStyle.secondaryTxt, { color: Theme.preto} ]}>Preço</Text>
									<Slider
										style={{ width: 280}}
											step={5}
											minimumValue={this.state.minPriceAlta}
											maximumValue={this.state.maxPriceAlta}
											value={this.state.priceAlta}
											onValueChange={val => this.setState({ priceAlta: val })}
											maximumTrackTintColor='#04d9ff' 
											minimumTrackTintColor='#00C0F9'
									/>
								</View>
								<View style={ FilterStyle.rangePrice }>
									<Text style={{ color: Theme.preto }}>{this.state.minPriceAlta}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.priceAlta}€</Text>
									<Text style={{ color: Theme.preto }}>{this.state.maxPriceAlta}€</Text>
								</View>
							</View>
						}
						{ this.state.primeiro &&
							<FlatList 
							style={{ flex: 1, flexDirection: 'row' }}
							contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-around', width: '100%'}}
							data={CatgsEmpresas}
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
                    <TouchableOpacity style={[ FilterStyle.btnSearch, { borderColor: this.props.themeMode ? Theme.preto : Theme.branco } ]} onPress={() => { this.save() }}>
                        <Text style={[ FilterStyle.cancelTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Procurar</Text>
                        <Icon3 name='angle-right' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, paddingLeft: 10, marginTop: 3 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
    }
}
