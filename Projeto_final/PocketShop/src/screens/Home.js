import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    ScrollView,
	FlatList,
    TextInput,
	SafeAreaView,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import FavStyle from '../styles/HomeStyle' 

import Favorites from '../data/prods/Favs'

import EachProd from '../components/ArrowFav'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'

export default class Fav extends React.Component {
    
	addFav = (un) => {
		
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
			} item={item} name={item.name} image={item.img} date={item.date} company={item.company} un={item.id} pressCheck={(un) => this.addFav(un)} price={item.price}/>
		)
	}
	
	
	
	keyExtractor = (item) => {
    	return item.id
  	}
    render() {
		return (
			<View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
				<View style={[ FavStyle.headerPart, { borderColor: lightMode? Theme.preto : Theme.branco } ]}>
					<Text style={{ fontSize: 30,color: lightMode? Theme.preto : Theme.branco }} >Favoritos</Text>
				</View>
				<FlatList  
					maxToRenderPerBatch={10}	
					initialNumToRender={10}
					style={{ backgroundColor: lightMode ? '#FAF9F6' : Theme.backDark }}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={Favorites}
					renderItem={this.renderListItem}
					keyExtractor={this.keyExtractor}
					ListFooterComponent={
						<View style={{ height: 20, backgroundColor: 'transparent', width: '100%' }} />
					}
				 />
			</View>
	  );
		
	}
}
