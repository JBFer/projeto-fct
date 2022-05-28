import React from 'react';
import { StatusBar } from 'expo-status-bar'
import store from '../constants/store'
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
	FlatList,
	SectionList,
    TouchableOpacity,
	BackHandler
} from 'react-native';

import Theme from '../styles/Comum' 
import CatalogStyle from '../styles/CatalogStyle' 

import Filter from './Filter' 
import Buy from './Buy' 
import EachProd from '../components/EachProd'
import Products from '../data/prods/Products'
import NoProd from '../components/NoProd'

import Fav from './Home';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import myGlobals from '../constants/global'
import { api_url } from '../constants/host';
import Loading from '../components/Loading';

export default class App extends React.PureComponent {
    state = {
		//lightMode: store.getState("lightMode").value,
		lightMode: myGlobals.lightMode,
        showModal: false,
        showModalBuy: false,
		pesquisa: {},
		searchTxt: '',
		search: false,
		change: false,
		array:[],
		array_v:[],
		array_pesq:[],
		categories:[],
		subcategories:[],
		loading: true,
		loading1: true,
		loading2: false,
		isFetching: false,
		inicial: 1,
		n_elementos: 50
	}


	componentDidMount() {
		fetch(api_url+'products/catgs')
		.then(response => response.json())
		.then(data => {
			this.setState({ categories: data.list });
		})
		fetch(api_url+'products/subcatgs')
		.then(response => response.json())
		.then(data => {
			this.setState({ subcategories: data.list });
		})
		this.fetchdata()

		BackHandler.addEventListener('hardwareBackPress', this.backAction);

		return () => BackHandler.removeEventListener('hardwareBackPress', this.backAction);
	}

	backAction = () => {
		if ( this.state.search ){
			this.setState({ search: false, searchTxt: '' })
		} else {
			BackHandler.exitApp()
		}
		return true;
	  };


	fetchdata = () => {
		setTimeout(() => {
			fetch( api_url+'products/user/0/10/views')
				.then(response => response.json())
				.then(data => {
					this.setState({ array_v: data.list, loading1: false });
				})
		}, 1000);
		setTimeout(() => {
			fetch( api_url+'products/user/'+((this.state.inicial-1)*this.state.n_elementos)+'/'+this.state.n_elementos)
				.then(response => response.json())
				.then(data => {
					this.setState({ array: data.list, loading: false, isFetching: false, inicial: this.state.inicial + 1 , n_elementos: this.state.n_elementos  });
				})
		}, 1500);
	}


	onRefresh() {
		this.setState({
			isFetching: true,
			array:[],
			array_v:[],
			loading: true,
			loading1: true,
			inicial: 1,
			n_elementos: 40
		},() => {
			this.fetchdata()
		});
	}
	

	searchInput = () => {
		if ( this.state.searchTxt ||  this.state.pesquisa.subcatg || this.state.pesquisa.catg || this.state.pesquisa.max_price != 1000){
			this.setState({ loading2: true, search: true })

			let url = api_url + 'products/search';
	
			if (this.state.searchTxt) {
				url += '/' + this.state.searchTxt;
			}
	
			let params = '';
	
			if (this.state.pesquisa.subcatg) {
				params = '?subcat=' + this.state.pesquisa.subcatg;
			}
	
			
			if (this.state.pesquisa.catg) {
				if (params.length) {
					params += '&';
				} else {
					params += '?';
				}
	
				params += 'cat=' + this.state.pesquisa.catg;
			}
			if (this.state.pesquisa.price_min) {
				if (params.length) {
					params += '&';
				} else {
					params += '?';
				}
	
				params += 'price_min=' + this.state.pesquisa.min_price;
			}
			if (this.state.pesquisa.max_price) {
				if (params.length) {
					params += '&';
				} else {
					params += '?';
				}
	
				params += 'price_max=' + this.state.pesquisa.max_price;
			}
			
	
			url += params;
	
			setTimeout(() => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						this.setState({ array_pesq: data.list, loading2: false });
					})
			}, 1500);
		}
    }


	addArray = () => {
		setTimeout(() => {
			fetch( api_url+'products/user/'+((this.state.inicial-1)*this.state.n_elementos)+'/'+this.state.n_elementos)
				.then(response => response.json())
				.then(data => {
					this.setState({ array: [ ...this.state.array, ...data.list], inicial: this.state.inicial + 1, n_elementos: this.state.n_elementos });
				})
		}, 500);
	}


 	searchFor = txt => {
		let pesquisa = {searchTxt: txt, subcatg: null, catg: null, min_price: 0, max_price: 1000}
		this.setState({ pesquisa, searchTxt: txt })
	} 


	renderTitle = ({ section }) => {
		if ( section.key == 'visitados' ){
			return null
		}
		else {
			return <Text style={[ CatalogStyle.Txt, { color: this.state.lightMode ? Theme.preto : Theme.branco } ]}>{section.title}</Text>
		}
	}
	

	keyExtractor = (item) => {
    	return item.idProducts.toString()
	}
	

	irCart = () => {
		this.setState({ showModalBuy: true })
		/* setTimeout(() => {
			let light = store.getState("lightMode").value
			console.log(light)
			store.setState("lightMode", !light,{persist: true})
		}, 2000);
		console.log(store.getState("lightMode").value) */
	}
	

	renderListItem = ({ item }) => {
		const { navigation } = this.props;
		return (
			<EachProd onClick={ () => navigation.navigate('ProductDetails', { 
					id: item.idProducts,
					name: item.name,
					img: item.img,
					price: item.price,
					id_comp: item.id_comp,
					company: item.company,
					desc: item.details,
					date: item.pubdate,
					subcategory: item.subcatg,
					views: item.views,
					stock: item.stock,
					favorite: item.favorite
				})
			} item={item} name={item.name} image={item.img} date={item.pubdate} company={item.company} un={item.idProducts} price={item.price} favorite={item.favorite} />
		)
	}
	

	renderSection = ({ item, section }) => {
			
			//console.warn(item.id)
			
			if ( item.id == 'visitados' ){
				return (
					<View style={{ marginBottom: 20 }}>
						<View style={ CatalogStyle.topPart }>
							<View style={{ width: '93%', flexDirection: 'row', borderWidth: 1, paddingHorizontal: 15, paddingBottom: 10, paddingTop: 10, borderRadius: 25, alignItems: 'center', borderColor: this.state.lightMode ? Theme.preto : Theme.branco }}>
								<TouchableOpacity activeOpacity={0.4} onPress={() => this.searchInput()}>
									<Icon2 name='search' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco,  paddingLeft: 5 }} />
								</TouchableOpacity>
								<TextInput 
									returnKeyType="search"
									onSubmitEditing={() => { this.searchInput() }}
									style={ [CatalogStyle.input, { color: this.state.lightMode ? Theme.preto : Theme.branco , borderBottomColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}
									placeholder='Procurar'
									placeholderTextColor={this.state.lightMode ? '#7d868f' : '#babfc4'}
									value={this.state.searchTxt}
									onChangeText={txt => this.searchFor(txt)}
								/>
							</View>
						</View>
						<Text style={[ CatalogStyle.Txt, { color: this.state.lightMode ? Theme.preto : Theme.branco } ]}>{section.title}</Text>
						{this.state.loading1 ? 
							<Loading/> 
						: 
							<FlatList
								ListEmptyComponent={<NoProd />}
								style={{ marginBottom: 5, height: 300 }}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								data={this.state.array_v}
								refreshing={this.state.isFetching}
								horizontal
								renderItem={this.renderListItem}
								keyExtractor={this.keyExtractor}
							/>
						}
					</View>
				
				
			)
			} else {
				return (	
					
					<View>
						{this.state.loading ? 
							<Loading/> 
						: 
							<FlatList  
								ListEmptyComponent={<NoProd />}
								initialNumToRender={10}
								maxToRenderPerBatch={6}
								style={{ width: '100%', alignItems: 'center' }}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								data={this.state.array}
								refreshing={this.state.isFetching}
								numColumns={2}
								renderItem={this.renderListItem}
								keyExtractor={this.keyExtractor}
								onEndReached={() => this.addArray()}
								onEndReachedThreshold={6}
							/>
						}
					</View>
				
				
			)
			}
		}
    

    render() {
		const { navigation } = this.props;
        return (
			<View style={ { flex: 1, backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark } }>
				<Filter 
					themeMode={this.state.lightMode} 
					isVisible={this.state.showModal} 
					txt={this.state.searchTxt}
					categories={this.state.categories}
					subcategories={this.state.subcategories}
					onCancel={() => { 
						this.setState({ showModal: false })
					}}
					onSave={(pesquisa) => { 
							this.setState({ showModal: false, searchTxt: pesquisa.searchTxt, pesquisa: pesquisa  }, this.searchInput)
						}}
				/>
				<Buy 
					hardwareAccelerated={true}
					themeMode={this.state.lightMode} 
					isVisible={this.state.showModalBuy} 
					onCancel={() => { 
						this.setState({ showModalBuy: false })
					}}
					nav={navigation}
				/>
				<StatusBar translucent backgroundColor="transparent" style={this.state.lightMode ? 'dark' : 'light'} />

				<View style={[ CatalogStyle.headerPart, styles.container ]}>
					<TouchableOpacity onPress={() => { this.setState({ showModal: true }) }}>
						<Icon2 name='filter' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco}} />
					</TouchableOpacity>
					<Text style={[ CatalogStyle.welcome, { color: this.state.lightMode ? Theme.preto : Theme.branco } ]}>PocketShop</Text>
					<TouchableOpacity onPress={() => { this.irCart() }}>
						<Icon3 name='shopping-cart' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, paddingRight: 10}} />
					</TouchableOpacity>
				</View>
				
				{ !this.state.search ? 
					<SectionList
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingHorizontal: 10 }}
						stickySectionHeadersEnabled={false}
						sections={Products}
						onRefresh={() => this.onRefresh()}
    					refreshing={this.state.isFetching}
						renderSectionHeader={this.renderTitle}
						renderItem={this.renderSection}
						
						ListFooterComponent={
							<View style={{ height: 20 }} />
						}
					/>
					:
						this.state.loading2 ?
							<View>
								<View style={[ CatalogStyle.topPart, { paddingHorizontal: 10 } ]}>
									<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
										<View style={{ width: '93%', flexDirection: 'row', borderWidth: 1, paddingHorizontal: 15, paddingBottom: 10, paddingTop: 10, borderRadius: 25, alignItems: 'center', borderColor: this.state.lightMode ? Theme.preto : Theme.branco }}>
											<TouchableOpacity activeOpacity={0.4} onPress={() => this.setState({ search: false, searchTxt: '' })}>
												<Icon2 name='arrow-back' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco,  paddingLeft: 5 }} />
											</TouchableOpacity>
											<TextInput 
												returnKeyType="search"
												onSubmitEditing={() => { this.searchInput() }}
												style={ [CatalogStyle.input, { color: this.state.lightMode ? Theme.preto : Theme.branco , borderBottomColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}
												placeholder='Procurar'
												placeholderTextColor={this.state.lightMode ? '#7d868f' : '#babfc4'}
												value={this.state.searchTxt}
												onChangeText={txt => this.searchFor(txt)}
											/>
										</View>
									</View>
								</View>
								<Loading/>
							</View>
						:
							<View>
								<FlatList  
									contentContainerStyle={{ paddingHorizontal: 10 }}
									ListEmptyComponent={<NoProd />}
									showsVerticalScrollIndicator={false}
									showsHorizontalScrollIndicator={false}
									data={this.state.array_pesq}
									initialNumToRender={10}
									numColumns={2}
									refreshing={this.state.isFetching}
									renderItem={this.renderListItem}
									keyExtractor={this.keyExtractor}
									ListHeaderComponent={
										<View style={ CatalogStyle.topPart }>
											<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
												<View style={{ width: '93%', flexDirection: 'row', borderWidth: 1, paddingHorizontal: 15, paddingBottom: 10, paddingTop: 10, borderRadius: 25, alignItems: 'center', borderColor: this.state.lightMode ? Theme.preto : Theme.branco }}>
													<TouchableOpacity activeOpacity={0.4} onPress={() => this.setState({ search: false, searchTxt: '' })}>
														<Icon2 name='arrow-back' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco,  paddingLeft: 5 }} />
													</TouchableOpacity>
													<TextInput 
														returnKeyType="search"
														onSubmitEditing={() => { this.searchInput() }}
														style={ [CatalogStyle.input, { color: this.state.lightMode ? Theme.preto : Theme.branco , borderBottomColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}
														placeholder='Procurar'
														placeholderTextColor={this.state.lightMode ? '#7d868f' : '#babfc4'}
														value={this.state.searchTxt}
														onChangeText={txt => this.searchFor(txt)}
													/>
												</View>
											</View>
										</View>
									}
									ListFooterComponent={
										<View style={{ height: 100 }} />
									}
								/>
					</View>
				}


			</View>





            )
    }
}


const styles = StyleSheet.create({
	container: {
    	marginTop: 15,
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		borderColor: '#D3D3D3'
  	},
})