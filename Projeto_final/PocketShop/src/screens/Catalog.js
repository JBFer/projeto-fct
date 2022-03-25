import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
	FlatList,
	SectionList,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import CatalogStyle from '../styles/CatalogStyle' 

import Filter from './Filter' 
import EachProd from '../components/EachProd'
import Products from '../data/prods/Products'
import NoProd from '../components/NoProd'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'
import { api_url } from '../constants/host';
import Loading from '../components/Loading';

export default class App extends React.PureComponent {
    state = {
        showModal: false,
		pesquisa: {},
		searchTxt: '',
		search: false,
		array:[],
		array_v:[],
		array_pesq:[],
		loading: true,
		loading1: true,
		loading2: false
	}


	componentDidMount() {
		setTimeout(() => {
			fetch( api_url+'products/visited/views/10')
				.then(response => response.json())
				.then(data => {
					this.setState({ array_v: data.list, loading1: false });
				})
		}, 1000);
		setTimeout(() => {
			fetch( api_url+'products/user')
				.then(response => response.json())
				.then(data => {
					this.setState({ array: data.list, loading: false });
				})
		}, 1500);
	}



	searchInput = () => {
		this.setState({ loading2: true, search: true })
		setTimeout(() => {
			fetch(api_url+'products/search/'+this.state.searchTxt)
				.then(response => response.json())
				.then(data => {
					this.setState({ array_pesq: data.list, loading2: false });
				})
		}, 1500);
    }


 	searchFor = txt => {
		let pesquisa = {searchTxt: txt}
		this.setState({ pesquisa, searchTxt: txt })
	} 


	renderTitle = ({ section }) => {
		if ( section.key == 'visitados' ){
			return null
		}
		else {
			return <Text style={[ CatalogStyle.Txt, { color: lightMode ? Theme.preto : Theme.branco } ]}>{section.title}</Text>
		}
	}
	
	
	keyExtractor = (item) => {
    	return item.idProducts.toString()
	}
	
	irCart = () => {
		console.warn('Ir cart')
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
					date: item.stock,
					subcategory: item.subcatg,
					views: item.views,
					stock: item.stock,
					active: item.active
				})
			} item={item} name={item.name} image={item.img} date={item.pubdate} company={item.company} un={item.idProducts} price={item.price}/>
		)
	}
	
	
	


	renderSection = ({ item, section }) => {
			
			//console.warn(item.id)
			
			if ( item.id == 'visitados' ){
				return (
					<View style={{ marginBottom: 20 }}>
						<View style={ CatalogStyle.topPart }>
							<View style={{ width: '93%', flexDirection: 'row', borderWidth: 1, paddingHorizontal: 15, paddingBottom: 10, paddingTop: 10, borderRadius: 25, alignItems: 'center', borderColor: lightMode ? Theme.preto : Theme.branco }}>
								<TouchableOpacity activeOpacity={0.4} onPress={() => this.searchInput()}>
									<Icon2 name='search' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco,  paddingLeft: 5 }} />
								</TouchableOpacity>
								<TextInput 
									style={ [CatalogStyle.input, { color: lightMode ? Theme.preto : Theme.branco , borderBottomColor: lightMode ? Theme.preto : Theme.branco } ]}
									placeholder='Procurar'
									placeholderTextColor={lightMode ? '#7d868f' : '#babfc4'}
									value={this.state.searchTxt}
									onChangeText={txt => this.searchFor(txt)}
								/>
							</View>
						</View>
						<Text style={[ CatalogStyle.Txt, { color: lightMode ? Theme.preto : Theme.branco } ]}>{section.title}</Text>
						{this.state.loading1 ? 
							<Loading/> 
						: 
							<FlatList
								ListEmptyComponent={<NoProd />}
								style={{ marginBottom: 5, height: 300 }}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								data={this.state.array_v}
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
								initialNumToRender={20}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								data={this.state.array}
								numColumns={2}
								renderItem={this.renderListItem}
								keyExtractor={this.keyExtractor}
							/>
						}
					</View>
				
				
			)
			}
		}
    
    render() {
        return (
			<View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
				<Filter 
					themeMode={lightMode} 
					isVisible={this.state.showModal} 
					txt={this.state.searchTxt}
					onCancel={() => { 
						this.setState({ showModal: false })
					}}
					onSave={(pesquisa) => { 
							this.setState({ showModal: false, searchTxt: pesquisa.searchTxt, pesquisa: pesquisa  }, this.searchInput)
						}}
				/>



				<StatusBar style={lightMode ? 'dark' : 'light'} />

				<View style={[ CatalogStyle.headerPart, styles.container ]}>
					<TouchableOpacity onPress={() => { this.setState({ showModal: true }) }}>
						<Icon2 name='filter' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco}} />
					</TouchableOpacity>
					<Text style={[ CatalogStyle.welcome, { color: lightMode ? Theme.preto : Theme.branco } ]}>PocketShop</Text>
					<TouchableOpacity onPress={() => { this.irCart() }}>
						<Icon3 name='shopping-cart' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco, paddingRight: 10}} />
					</TouchableOpacity>
				</View>
				
				{ !this.state.search ? 
					<SectionList
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingHorizontal: 10 }}
						stickySectionHeadersEnabled={false}
						sections={Products}
						renderSectionHeader={this.renderTitle}
						renderItem={this.renderSection}
						
						ListFooterComponent={
							<View style={{ height: 20 }} />
						}
					/>
					:
						this.state.loading2 ?
							<Loading/>
						:
							<View>
								<FlatList  
									contentContainerStyle={{ paddingHorizontal: 10 }}
									ListEmptyComponent={<NoProd />}
									showsVerticalScrollIndicator={false}
									showsHorizontalScrollIndicator={false}
									data={this.state.array_pesq}
									numColumns={2}
									renderItem={this.renderListItem}
									keyExtractor={this.keyExtractor}
									ListHeaderComponent={
										<View style={ CatalogStyle.topPart }>
											<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
												<View style={{ width: '93%', flexDirection: 'row', borderWidth: 1, paddingHorizontal: 15, paddingBottom: 10, paddingTop: 10, borderRadius: 25, alignItems: 'center', borderColor: lightMode ? Theme.preto : Theme.branco }}>
													<TouchableOpacity activeOpacity={0.4} onPress={() => this.setState({ search: false, searchTxt: '' })}>
														<Icon2 name='arrow-back' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco,  paddingLeft: 5 }} />
													</TouchableOpacity>
													<TextInput 
														style={ [CatalogStyle.input, { color: lightMode ? Theme.preto : Theme.branco , borderBottomColor: lightMode ? Theme.preto : Theme.branco } ]}
														placeholder='Procurar'
														placeholderTextColor={lightMode ? '#7d868f' : '#babfc4'}
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