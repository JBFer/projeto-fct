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
		dataSource: [],
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
						<TextInput 
							style={ [CatalogStyle.input, { color: lightMode ? Theme.preto : Theme.branco , borderBottomColor: lightMode ? Theme.preto : Theme.branco } ]}
							value={this.state.searchTxt}
							onChangeText={txt => this.setState({ searchTxt: txt })}
						/>
						<TouchableOpacity activeOpacity={0.4} onPress={() => this.searchInput()}>
							<Icon2 name='search' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
						</TouchableOpacity>
					</View>
					<Text style={[ CatalogStyle.Txt, { color: lightMode ? Theme.preto : Theme.branco } ]}>{section.title}</Text>
					<FlatList
						maxToRenderPerBatch={10}	
						initialNumToRender={20}
						ListEmptyComponent={<NoProd />}
						style={{ marginBottom: 10 }}
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
		
	
	
	renderListItem = ({ item }) => {
		return (
			<EachProd onClick={this.clickCheck} name={item.name} image={item.img} date={item.date} company={item.company} price={item.price}/>
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
					<TouchableOpacity onPress={() => { this.irCart() }}>
						<Icon3 name='shopping-cart' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco, paddingRight: 10}} />
					</TouchableOpacity>
				</View>
				
				
				
				
				
				<SectionList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					onScroll={() => this.setState({ width: 1 }) }
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