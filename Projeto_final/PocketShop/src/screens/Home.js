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

import myGlobals from '../constants/global'
import { api_url } from '../constants/host';
import { ThemeProvider } from '@react-navigation/native';
import Loading from '../components/Loading';

export default class Fav extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			array:[],
			isFetching: false,
			loading: true          
		}
	  }

	//fazer loading dos favoritos

	componentDidMount() {
		setTimeout(() => {
			fetch( api_url+'products/favorites')
				.then(response => response.json())
				.then(data => {
					this.setState({ array: data.list, loading: false, isFetching: false });
				})
		}, 800);
	}

	onRefresh() {
		this.setState({isFetching: true,},() => {this.fetchdata();});
	}

	fetchdata = () => {
		fetch( api_url+'products/favorites')
			.then(response => response.json())
			.then(data => {
				this.setState({ array: data.list, loading: false, isFetching: false });
			})
	}

	//quando é clicado um dos buttons do favorito
    
	changeFavoriteState = () => {
		console.log("change")
		this.fetchdata()
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
				})
			} item={item} name={item.name} price={item.price} image={item.img} date={item.pubdate} company={item.company} un={item.idProducts} pressCheck={() => this.changeFavoriteState()}/>
		)
	}
	
	
	
	keyExtractor = (item) => {
		//console.log(this.state.array)
    	return item.idProducts.toString()
  	}
    render() {
		return (
			<View style={ { flex: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark } }>
				<View style={[ FavStyle.headerPart, { borderColor: myGlobals.lightMode? Theme.preto : Theme.branco } ]}>
					<Text style={{ fontSize: 30,color: myGlobals.lightMode? Theme.preto : Theme.branco }}>Favoritos</Text>
				</View>
				{this.state.loading ? 
					<Loading/> 
				: 
					<FlatList  
					maxToRenderPerBatch={10}	
					initialNumToRender={10}
					style={{ backgroundColor: myGlobals.lightMode ? '#FAF9F6' : Theme.backDark }}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={this.state.array}
					onRefresh={() => this.onRefresh()}
    				refreshing={this.state.isFetching}
					renderItem={this.renderListItem}
					keyExtractor={this.keyExtractor}
					ListFooterComponent={
						<View style={{ height: 20, backgroundColor: 'transparent', width: '100%' }} />
					}
				 />}
			</View>
	  );
		
	}
}
