import React, { useEffect, useState } from 'react';
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
import { api_url } from '../constants/host';

const Details = ({ route, params }) => {
	const [data, setData] = useState({});

	const { id, name, img, price, company, desc, date, category, subcategory, views, serial } = route.params;

	useEffect(() => {
		//console.warn(id);
		fetch( api_url+'products/updateViews/'+id, {
			method: 'PUT'
		}),
		fetch( api_url+'products/specs/'+id)
			.then(response => response.json())
			.then(data => {
				//console.log(data.object);
				setData(data.object);
			})
	}, [id])
	
	const renderTitle = ({ }) => {
		return null
	}
	 
	 
	const irCart = () => {
		if (data.stock > 0){
			console.warn('ir Cart')
		} else {
			console.warn('Sem stock')
		}
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
									<Text style={[ DetailsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>{data.name}</Text>
								</View>
								<View>
									<Text style={[ DetailsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>{data.price}€</Text>
								</View>
							</View>
							<View style={{ height: 70, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{data.comp_name}</Text>
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
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{data.catg_name}</Text>
							</View>
							<View style={[ DetailsStyle.catg, { backgroundColor: lightMode ? '#f4f4f5' : '#3c4146'  , marginRight: 20, paddingHorizontal: 15} ]}>
								<Text style={{ fontSize: 15, color: lightMode ? Theme.preto : Theme.branco }}>{data.subcatg_name}</Text>
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
							<Text style={{color: lightMode ? Theme.preto : Theme.branco, fontSize: 16, textAlign: 'justify', paddingTop: 5}}>    {data.details}</Text>
						</View>
						<View style={{ width: '100%', alignItems: 'center', marginTop: 70 }}>
								<Image resizeMode='contain' source={{uri: data.comp_logo }} style={{ width: '80%', height: 130, borderWidth: 1, borderColor: lightMode ? Theme.branco : Theme.preto }} />
								<Text style={{ fontSize: 25, marginTop: 7, color: lightMode ? Theme.preto : Theme.branco }}>{data.comp_name}</Text>
							<View style={{ width: '90%', marginTop: 20}} >
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Telefone: {data.comp_tel}</Text>
								<Text style={[ DetailsStyle.companyInfo, { color: lightMode ? Theme.preto : Theme.branco } ]}>Email: {data.comp_email}</Text>
							</View>
						</View>
						<View style={{ alignItems: 'center', justifyContent: 'center', height: 250, borderWidth: 1, marginTop: 70, marginBottom: 30, borderColor: lightMode ? Theme.preto : Theme.branco }}>
								<Text style={{ fontSize: 20, color: lightMode ? Theme.preto : Theme.branco }}>Mais produtos relacionados</Text>
						</View>
					</View>
					<View style={[ DetailsStyle.footer, { borderColor: lightMode ? '#3c4146' : '#bfc3c8'} ]}>
						<View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: '100%', marginTop: 5}} >
							<Text style={{ color: lightMode ? '#3c4146' : '#bfc3c8'}}>Views: {data.views}</Text>
							<Text style={{ color: lightMode ? '#3c4146' : '#bfc3c8'}}>Stock:{data.stock}</Text>
						</View>
					</View>
				</View>
			</View>
				 
		)
		
	}
	
	return(
		<View style={{ flex: 1 }}>
			<StatusBar backgroundColor={lightMode ? 'white' : 'black'} style={lightMode ? 'dark' : 'light'} />
			<View style={{ marginTop: StatusBar.currentHeight || 25, width: '100%', height: 220, position: 'absolute' }}>
				<Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={{uri: data.img }} />
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
