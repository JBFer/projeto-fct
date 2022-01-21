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
	Modal,
	Image,
	SafeAreaView,
	SectionList,
	FlatList,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import DetailsStyle from '../styles/DetailsStyle' 

import Products from '../data/prods/ProdsDetail'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'


import { lightMode } from '../constants/global'

const Details = ({ route, params }) => {
	
	const renderTitle = ({ section }) => {
		return null
	}
	 
	 
	const irCart = () => {
		console.warn('ir Cart')
	}
	
	
	
	const renderSection = ({ item, section }) => {
		return (
			<View style={{ height: '100%', width: '100%', backgroundColor: lightMode ? '#F1F1F1' : Theme.backDark, borderWidth: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden' }}>
				<View style={{ backgroundColor: lightMode ? '#FAF9F6' : Theme.backDark, width: '100%', paddingLeft: 10, paddingRight: 10 }} >
					<View style={{ width: '100%', height: 20, paddingBottom: 15, alignItems: 'center', justifyContent: 'center' }} >
						<Icon name='window-minimize' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco}} />
					</View>
					<View style={[ DetailsStyle.topPart, { borderBottomWidth: 1, borderColor: lightMode ? 'black' : '#FAF9F6' } ]}>
						<View style={{ width: '100%' }}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View style={{ width: '75%' }}>
									<Text style={[ DetailsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>{name}</Text>
								</View>
								<View>
									<Text style={[ DetailsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>{price}€</Text>
								</View>
							</View>
							<View style={{ height: 70, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{company}</Text>
								<TouchableOpacity onPress={() => { irCart() }}>
									<View style={{ paddingRight: 20, borderWidth: 1, borderRadius: 15, width: 120, height: 40, alignItems: 'center', flexDirection: 'row', borderColor: '#03C04A', justifyContent: 'center' }}>
										<Text style={{ fontSize: 15, color: '#03C04A', borderRightWidth: 1, paddingRight: 7, paddingLeft: 15, borderColor: '#03C04A' }}>Adicionar</Text>
										<Icon3 name='shopping-cart' size={20} style={{ color: '#03C04A', paddingLeft: 7 }} />
									</View>
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ height: 70, width: '100%', flexDirection: 'row', marginTop: 20 }}>
							<View style={[ DetailsStyle.catg, { backgroundColor: lightMode ? '#f4f4f5' : '#3c4146', marginRight: 20, paddingHorizontal: 15  } ]}>
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{category}</Text>
							</View>
							<View style={[ DetailsStyle.catg, { backgroundColor: lightMode ? '#f4f4f5' : '#3c4146'  , marginRight: 20, paddingHorizontal: 15} ]}>
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{subcategory}</Text>
							</View>
						</View>
					</View>
					<View style={ DetailsStyle.middlePart }>
						<View style={{ alignItems: 'center', justifyContent: 'center', width: '90%', height: '90%', borderWidth: 1, borderColor: lightMode ? Theme.preto : Theme.branco }}>
							<Text style={{ fontSize: 20, color: lightMode ? Theme.preto : Theme.branco }}>Imagens</Text>
						</View>
					</View>
					<View style={ DetailsStyle.bottomPart }>
						<View style={{ backgroundColor: lightMode ? '#f4f4f5' : '#3c4146', width: '100%', padding: 10, borderRadius: 5, elevation: 5 }}>
							<Text style={[ DetailsStyle.title, { color: lightMode ? Theme.preto : Theme.branco, width: '100%' , borderBottomWidth: 1, borderColor: lightMode ? Theme.preto : Theme.branco } ]}> Sobre </Text>
							<Text style={{color: lightMode ? Theme.preto : Theme.branco, fontSize: 16, textAlign: 'justify', paddingTop: 5}}>    {desc}</Text>
						</View>
						<View style={{ width: '100%', alignItems: 'center', marginTop: 70 }}>
								<Image resizeMode='contain' style={{ width: '80%', height: 130, borderWidth: 1, borderColor: lightMode ? Theme.preto : Theme.branco }} />
								<Text style={{ fontSize: 25, marginTop: 7, color: lightMode ? Theme.preto : Theme.branco }}>{company}</Text>
							<View style={{ width: '90%', marginTop: 20}} >
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Morada: Rua das Casas, nº2, Lisboa</Text>
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Telemóvel: 999 999 999</Text>
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Telefone: 000 000 000</Text>
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Email: empresa@gmail.com</Text>
							</View>
						</View>
						<View style={{ alignItems: 'center', justifyContent: 'center', height: 250, borderWidth: 1, marginTop: 70, marginBottom: 30, borderColor: lightMode ? Theme.preto : Theme.branco }}>
								<Text style={{ fontSize: 20, color: lightMode ? Theme.preto : Theme.branco }}>Mais produtos relacionados</Text>
						</View>
					</View>
					<View style={[ DetailsStyle.footer, { borderColor: lightMode ? '#3c4146' : '#bfc3c8'} ]}>
						<View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: '100%', marginTop: 5}} >
							<Text style={{ color: lightMode ? '#3c4146' : '#bfc3c8'}}>Views: {views}</Text>
							<Text style={{ color: lightMode ? '#3c4146' : '#bfc3c8'}}>Model: {serial}</Text>
						</View>
					</View>
				</View>
			</View>
				 
		)
		
	}
	
	const { id, name, img, price, company, desc, date, category, subcategory, views, serial } = route.params;
	
	return(
		<View style={{ flex: 1 }}>
			<StatusBar backgroundColor={lightMode ? 'white' : 'black'} style={lightMode ? 'dark' : 'light'} />
			<View style={{ marginTop: StatusBar.currentHeight || 25, width: '100%', height: 220, position: 'absolute' }}>
				<Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={{uri: img }} />
			</View>
			<SectionList
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				stickySectionHeadersEnabled={false}
				sections={Products}
				initialNumToRender={5}
				renderSectionHeader={renderTitle}
				renderItem={renderSection}
				ListHeaderComponent={
					<View style={{ height: 230, backgroundColor: 'transparent', width: '100%' }} />
				}
			/>
		</View>
	)
			
		
}

export default Details;
