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
import EachSubCatg from '../components/EachSubCatg'
import CatgsEmpresas from '../data/catgs/CategoriasEmpresas'
import CatgsProdutos from '../data/catgs/CategoriasProdutos'
import CatgsEmAlta from '../data/catgs/CategoriasEmAlta'
import SubCatgsProd from '../data/catgs/SubcategoriasProdutos'

const initialState = {
	primeiroIcon: 'suitcase',
	primeiroCatg: 'Produtos',
}

export default class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
			searchTxt: this.props.txt,
            priceProd: 200,
            minPriceProd: 0,
            maxPriceProd: 200,
            priceAlta: 200,
            minPriceAlta: 0,
            maxPriceAlta: 200,
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
			filtrados: [],
			choose: 0,
			...initialState
        }
    }
	
	adicionarStack = (idCatg) => {
		if (this.state.segundo){
			if (this.state.choose < 2 ){
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

				this.setState({ stack }, this.retornaSubCatg)
			} else {
				let anotherData = [ ...this.state.stack ]
				//console.warn(anotherData)
				let anotherNova = anotherData.pop()
				//console.warn(anotherNova)
				//console.warn(anotherData)
				anotherData.push({
					id: idCatg.id,
					icon: idCatg.icon,
					dad: idCatg.dad,
					category: idCatg.category
				})
				
				this.setState({
					choose: 1,
					stack: anotherData
				})
			}
		} else {
			if (this.state.choose < 1){
				const stack = [ ...this.state.stack ]
				stack.push({
					id: idCatg.id,
					icon: idCatg.icon,
					category: idCatg.category
				})

				this.setState({ stack })
			} else {
				let anotherDummyData = [ ...this.state.stack ]
				let anotherDummyNova = anotherDummyData.pop()
				anotherDummyData.push({
					id: idCatg.id,
					icon: idCatg.icon,
					category: idCatg.category
				})
				
				this.setState({
					choose: 0,
					stack: anotherDummyData
				})
			}
		}
		
		let choose = this.state.choose;
		choose += 1;
		if ( this.state.primeiro || this.state.terceiro ) {
			this.setState({
				choose
		})
		} else {
			this.setState({
				choose,
				primeiroIcon: idCatg.icon,
				primeiroCatg: idCatg.category,
		})
		}
		//console.warn(choose)
		//console.warn(this.state.stack)
	}
	
	
	
	retornaSubCatg = () => {
		let novoArray = [ ...this.state.filtrados ]
		let accCatg = SubCatgsProd.filter(catg => catg.dad == this.state.primeiroCatg);
		accCatg.forEach(catg => {
			
			novoArray.push({
				id: catg.id,
				dad: catg.dad,
				icon: catg.icon,
				category: catg.category
			})
					
			
			//console.warn(catg)
			//console.warn(novoArray)
			
		})
		
		this.setState({
			filtrados: novoArray
		})
	}
	
	
	
    
    mudarCor = () => {
        this.setState({
            backgroundColorCaixa: 'lightblue',
            backgroundColor: 'lightblue',
            backgroundColor2: this.props.themeMode ? Theme.branco : Theme.backDark,
            backgroundColor3: this.props.themeMode ? Theme.branco : Theme.backDark,
            borderTopLeft: 0,
            borderTopRight: 15,
			stack: [],
			filtrados: [],
			choose: 0,
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
			stack: [],
			filtrados: [],
			choose: 0,
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
			stack: [],
			filtrados: [],
			choose: 0,
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
			filtrados: [],
			show: false,
			choose: 0,
			...initialState
        })
        this.props.onCancel()
    }
	
	fuckGoBack = () => {
		this.setState({
			borderTopLeft: 15,
			borderTopRight: 15,
			primeiroIcon: 'suitcase',
			primeiroCatg: 'Produtos',
			show: false,
			stack: [],
			filtrados: [],
			choose: 1
		})
		
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
            <View style={ { height: '100%', width: '100%', backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
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
					{ !this.state.show &&
					<View style={ FilterStyle.middlePart }>
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
					}
					{ this.state.show &&
					<View style={ FilterStyle.middlePart }>
						<View style={[ FilterStyle.topCatg2 ]}>
							<TouchableOpacity activeOpacity={0.4} onPress={() => this.fuckGoBack()} style={{ marginLeft: 20 }}>
								<Icon3 name='angle-left' size={30} style={{ color: Theme.preto, paddingLeft: 10, paddingRight: 7, marginTop: 3 }} />
							</TouchableOpacity>
							<TouchableOpacity disabled={this.state.show} style={[ FilterStyle.Catg, { backgroundColor: this.state.backgroundColor2, alignItems: 'center' } ]} onPress={() => { this.mudarCor2() }} activeOpacity={0.2}>
								<Icon3 name={this.state.primeiroIcon} size={25} style={{ color: this.props.themeMode ? Theme.branco : Theme.preto, width: 66, height: 66, lineHeight: 66, textAlign: 'center', borderRadius: 50, backgroundColor: this.props.themeMode ? Theme.preto : Theme.branco }} />
								<Text style={{ color: Theme.preto }}>{ this.state.primeiroCatg }</Text>
							</TouchableOpacity>
						</View>
						<View style={[ FilterStyle.downCatg, { backgroundColor:this.state.backgroundColorCaixa, borderTopLeftRadius:this.state.borderTopLeft, borderTopRightRadius:this.state.borderTopRight } ]}>
							{ this.state.segundo &&
								<View style={{ flex: 1 }}>
									<FlatList 
										style={{ flexDirection: 'row' }}
										contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-around', width: '100%'}}
										data={this.state.filtrados}
										numColumns={3}
										keyExtractor={item => `${item.id}`} 
										renderItem={({item}) => <EachSubCatg id={item.id} category={item.category} icon={item.icon} onAdicionarStack={
												(idCatg) => this.adicionarStack(idCatg)
											}/>} 
									/>
								</View>
							}
                    	</View>
					</View>
					}
                    
                
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
