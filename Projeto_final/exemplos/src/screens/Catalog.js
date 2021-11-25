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


	searchInput = () => {
		console.warn(this.state.pesquisa)
	}
	
	clickCheck = (nome) => {
		console.warn(nome)
	}
	
	irVisitados = () => {
		console.warn('Ver mais')
	}
	
	
	animateHeader = () => {
		//console.warn('aasd')
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
					<TouchableOpacity onPress={() => { console.warn('Ir cart') }}>
						<Icon3 name='shopping-cart' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco, paddingRight: 10}} />
					</TouchableOpacity>
				</View>
				
				
				
				<SectionList
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					sections={Products}
					onScroll={() => { this.animateHeader() }}
					initialNumToRender={5}
					renderSectionHeader={({ section  }) => (
					<>
						{section.horizontal ? (
						 <>


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
							<View style={ CatalogStyle.specs }>
								<Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>{section.title}</Text>
								<TouchableOpacity onPress={this.irVisitados}>
									<Text style={[ CatalogStyle.txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Ver mais...</Text>
								</TouchableOpacity>
							</View>

							<FlatList
								horizontal
								style={{ marginBottom: 30 }}
								data={section.data}
								renderItem={({ item }) => <EachProd onClick={this.clickCheck} name={item.name} image={item.img} date={item.date} company={item.company} price={item.price}/>}
								showsHorizontalScrollIndicator={false}
							 />
						 </>
						 ) :  <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>{section.title}</Text>}
					</>
					)}
					renderItem={({ item, section  }) => {
						if (section.horizontal) {
							return null;
						} else {
							return (
									<EachProd onClick={this.clickCheck} name={item.name} image={item.img} date={item.date} company={item.company} price={item.price}/>
							); 	
						}
					}}
					
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
  	},
})