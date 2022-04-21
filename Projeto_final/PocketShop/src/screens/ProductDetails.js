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

import Related from '../components/Related'

import Theme from '../styles/Comum' 
import DetailsStyle from '../styles/DetailsStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import Carousel from 'react-native-snap-carousel';

import myGlobals from '../constants/global'
import { api_url } from '../constants/host';

const Details = ({ route, params, navigation }) => {
	const [data, setData] = useState({});
	const [images, setImages] = useState([]);
	const [stock, setStock] = useState(false);
	const [carousel, setCarousel] = useState(null);

	let id = route.params.id;
	let img = route.params.img ?? data.img;
	let name = route.params.name ?? data.name;
	let price = route.params.price ?? data.price;
	let company = route.params.company ?? data.comp_name;
	let desc = route.params.desc ?? data.details;
	let date = route.params.date ?? data.pubdate;
	let subcategory = route.params.subcategory ?? data.subcategory;
	let views = route.params.views ?? data.views;


	useEffect(() => {
		//console.warn(id);
		fetch( api_url+'products/updateViews/'+id, {
			method: 'PUT'
		}),
		fetch( api_url+'products/images/'+id)
			.then(response => response.json())
			.then(data => {
				//console.log(data.object);
				setImages(data.list)
			}),
		fetch( api_url+'products/specs/'+id)
			.then(response => response.json())
			.then(data => {
				//console.log(data.object);
				setData(data.object);
				if(data.object.stock < 10){
					setStock(true);
				} else {
					setStock(false)
				}
			})
		 
	}, [])
	 
	const irCart = () => {
		if (data.stock > 0){
			console.warn('ir Cart')
		} else {
			console.warn('Sem stock')
		}
	}

	const goImg = () => {
		//console.warn(carousel.currentIndex)
 		navigation.push('ImageLayout', { 
			list: images,
			currentImg: carousel.currentIndex
		}) 
	}

	const _renderItem = ({item, index}) => {
        return (
			<TouchableOpacity onPress={() => goImg()} activeOpacity={0.9} style={{ width: '100%', height: 350, alignItems: 'center', justifyContent: 'center', borderRadius: 25, overflow: 'hidden' }}>
				<Image resizeMode='cover' blurRadius={4} source={{uri: item.url }} style={{ width: '100%', height: '100%', borderWidth: 1 }} />
				<Image resizeMode='contain' source={{uri: item.url }} style={{ width: '100%', height: '100%', position: 'absolute' }} />
			</TouchableOpacity>
        );
    }
	
	return(
		<View style={{ flex: 1 }}>
			<View style={{ marginTop: StatusBar.currentHeight || 25, width: '100%', height: 220, position: 'absolute' }}>
				<Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={{uri: img }} />
			</View>
			<ScrollView style={{ flex: 1 }}>
				<StatusBar backgroundColor={myGlobals.lightMode ? 'white' : 'black'} style={myGlobals.lightMode ? 'dark' : 'light'} />
				<View style={{ height: 230, backgroundColor: 'transparent', width: '100%' }} />
				<View style={{ height: '100%', width: '100%', backgroundColor: myGlobals.lightMode ? '#F1F1F1' : Theme.backDark, borderWidth: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden' }}>
					<View style={{ backgroundColor: myGlobals.lightMode ? '#FAF9F6' : Theme.backDark, width: '100%', paddingLeft: 10, paddingRight: 10 }} >
						<View style={{ width: '100%', height: 20, paddingBottom: 15, alignItems: 'center', justifyContent: 'center' }} >
							<Icon name='window-minimize' size={25} style={{ color: myGlobals.lightMode ? Theme.preto : Theme.branco}} />
						</View>
						<View style={[ DetailsStyle.topPart, { borderBottomWidth: 1, borderColor: myGlobals.lightMode ? 'black' : '#FAF9F6' } ]}>
							<View style={{ width: '100%' }}>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View style={{ width: '75%' }}>
										<Text style={[ DetailsStyle.title, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{name}</Text>
									</View>
									<View>
										<Text style={[ DetailsStyle.title, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{price}€</Text>
									</View>
								</View>
								<View style={{ height: 70, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
									<Text style={{ fontSize: 15, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>{company}</Text>
									<View>
									<TouchableOpacity style={{ opacity: !stock ? 1 : 0.5 }} disabled={stock} onPress={() => { irCart() }}>
										<View style={{ paddingRight: 20, borderWidth: 1, borderRadius: 15, width: 120, height: 40, alignItems: 'center', flexDirection: 'row', borderColor: !stock ? '#03C04A' : 'red', justifyContent: 'center', marginTop: 27 }}>
											<Text style={{ fontSize: 15, color: !stock ? '#03C04A' : 'red', borderRightWidth: 1, paddingRight: 7, paddingLeft: 15, borderColor: !stock ? '#03C04A' : 'red' }}>Adicionar</Text>
											<Icon3 name='shopping-cart' size={20} style={{ color: !stock ? '#03C04A' : 'red', paddingLeft: 7 }} />
										</View>
									</TouchableOpacity>
									<Text style={{ textAlign: 'center', color: !stock ? '#03C04A' : 'red' }}>{!stock ? 'Em stock' : 'Sem stock'}</Text>
									</View>
								</View>
							</View>
							<View style={{ height: 70, width: '100%', flexDirection: 'row', marginTop: 20 }}>
								<View style={[ DetailsStyle.catg, { backgroundColor: myGlobals.lightMode ? '#f4f4f5' : '#3c4146', marginRight: 20, paddingHorizontal: 15  } ]}>
									<Text style={{ fontSize: 15, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>{data.catg_name}</Text>
								</View>
								<View style={[ DetailsStyle.catg, { backgroundColor: myGlobals.lightMode ? '#f4f4f5' : '#3c4146'  , marginRight: 20, paddingHorizontal: 15} ]}>
									<Text style={{ fontSize: 15, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>{data.subcatg_name}</Text>
								</View>
							</View>
						</View>
						<View style={ DetailsStyle.middlePart }>
							{
								images ? (
									<Carousel
										ref={c => { setCarousel(c); }}
										data={images}
										renderItem={_renderItem}
										sliderWidth={400}
										itemWidth={300}
									/>
								) : (
									<Text style={{ fontSize: 20, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>No images available</Text>
								)
							}
						</View>
						<View style={ DetailsStyle.bottomPart }>
							<View style={{ backgroundColor: myGlobals.lightMode ? '#f4f4f5' : '#3c4146', width: '100%', padding: 10, borderRadius: 15, elevation: 5 }}>
								<Text style={[ DetailsStyle.title, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, width: '100%' , borderBottomWidth: 1, borderColor: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}> Sobre </Text>
								<Text style={{color: myGlobals.lightMode ? Theme.preto : Theme.branco, fontSize: 16, textAlign: 'justify', paddingTop: 5}}>    {desc}</Text>
							</View>
							<View style={{ width: '100%', alignItems: 'center', marginTop: 70 }}>
									<Image resizeMode='contain' source={{uri: data.comp_logo }} style={{ width: '80%', height: 130 }} />
								<View style={{ width: '90%', marginTop: 20}} >
									<Text style={[ DetailsStyle.companyInfo, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, textAlign: 'center', marginBottom: 15 } ]}>{data.comp_details}</Text>
									<Text style={[ DetailsStyle.companyInfo, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>Telefone: {data.comp_tel}</Text>
									<Text style={[ DetailsStyle.companyInfo, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>Email: {data.comp_email}</Text>
								</View>
							</View>
							<View style={{ alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, marginTop: 70, marginBottom: 30, borderColor: myGlobals.lightMode ? Theme.preto : Theme.branco }}>
								<View style={{ width: '100%', marginTop: 20 }}>
									<Text style={{ width: '100%', fontSize: 20, color: myGlobals.lightMode ? Theme.preto : Theme.branco  }}>Produtos relacionados:</Text>
								</View>
								<Related navigation={navigation} filter={subcategory} id={route.params.id}/>
							</View>
						</View>
						<View style={[ DetailsStyle.footer, { borderColor: myGlobals.lightMode ? '#3c4146' : '#bfc3c8'} ]}>
							<View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: '100%', marginTop: 5}} >
								<Text style={{ color: myGlobals.lightMode ? '#3c4146' : '#bfc3c8'}}>Views: {views}</Text>
								<Text style={{ color: myGlobals.lightMode ? '#3c4146' : '#bfc3c8'}}>{date}</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
			
		
}

export default Details;
