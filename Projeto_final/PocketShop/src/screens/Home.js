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

//import Favorites from '../data/prods/Favs'

import EachProd from '../components/ArrowFav'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'
import { api_url } from '../constants/host';

export default class Fav extends React.Component {
	state = {
		array:[]
	}

	componentDidMount() {
		fetch( api_url+'products/favorites')
			.then(response => response.json())
			.then(data => {
				this.setState({ array: data.list });
			})
	}
    
	addFav = (un) => {
		console.log("a")
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
			} item={item} name={item.name} image={item.img} date={item.stock} company={item.company} un={item.idProducts} pressCheck={(un) => this.addFav(un)} price={item.price}/>
		)
	}
	
	
	
	keyExtractor = (item) => {
		//console.log(this.state.array)
    	return item.idProducts.toString()
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
					data={this.state.array}
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
