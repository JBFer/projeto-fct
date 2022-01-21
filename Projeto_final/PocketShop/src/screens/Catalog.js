import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    ScrollView,
    TextInput,
	FlatList,
	SectionList,
	SafeAreaView,
	Animated,
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

export default class App extends React.Component {
    state = {
        showModal: false,
		pesquisa: {},
		searchTxt: '',
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
					<FlatList
						maxToRenderPerBatch={10}	
						initialNumToRender={20}
						ListEmptyComponent={<NoProd />}
						style={{ marginBottom: 5, height: 300 }}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						data={item.list}
						horizontal
						renderItem={this.renderListItem}
						keyExtractor={this.keyExtractor}
					/>
				</View>
			
			 
		)
		} else {
			return (	
			  <FlatList  
				maxToRenderPerBatch={10}	
				initialNumToRender={30}
				ListEmptyComponent={<NoProd />}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={item.list}
				numColumns={2}
				renderItem={this.renderListItem}
				keyExtractor={this.keyExtractor}
			 />
			
			 
		)
		}
	}
	
	clickCheck = () => {
		navigation.navigate('Definicoes')
	}
		
	
	
	renderListItem = ({ item }) => {
		const { navigation } = this.props;
		return (
			<EachProd onClick={ () => navigation.navigate('ProductDetails', { 
					id: item.id,
					name: item.name,
					img: item.img,
					price: item.price,
					company: item.company,
					desc: item.description,
					date: item.date,
					category: item.category,
					subcategory: item.subcatg,
					views: item.views,
					serial: item.serial
				})
			} item={item} name={item.name} image={item.img} date={item.date} company={item.company} price={item.price}/>
		)
	}
	
	
	
	keyExtractor = (item) => {
    	return item.id
  	}

	
	

	searchInput = () => {
		console.warn(this.state.pesquisa)
	}
	
	clickCheck = (nome) => {
		console.warn(nome)
	}
	
	irVisitados = () => {
		console.warn('Ver mais')
	}
	irCart = () => {
		console.warn('Ir cart')
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
				
				
				
				
				
				<SectionList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					sections={Products}
					initialNumToRender={5}
					renderSectionHeader={this.renderTitle}
					renderItem={this.renderSection}
					
					ListFooterComponent={
						<View style={{ height: 20 }} />
					}
				/>

			</View>





            )
    }
}


const styles = StyleSheet.create({
	container: {
    	marginTop: StatusBar.currentHeight + 10 || 15,
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		borderColor: '#D3D3D3'
  	},
})