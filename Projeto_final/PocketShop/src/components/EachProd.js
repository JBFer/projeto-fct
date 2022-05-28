import React from 'react';
import { 
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Alert 
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'
import CatalogStyle from '../styles/CatalogStyle' 

import { api_url } from '../constants/host';



export default class EachProd extends React.PureComponent {
	constructor(props) {
		super(props);
		//console.log(this.props.favorite)
		this.state = {
		  icon: this.props.favorite ? true : false
		};
	  }

	
	changeIcon = () => {
		this.setState(prevState => ({
			icon: !prevState.icon
		  }));
		this.state.icon ? 
			this.retirar()
		: 
			this.adicionar()
	}

	retirar = () => {
		fetch( api_url+'removeFavorite/'+this.props.un , {
			method: 'DELETE'
		})
	}

	adicionar = () => {
		fetch( api_url+'addFavorite', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				 id_prod: this.props.un 
			})
		})
	}
	
	
	toBig = (title) => {
		if (title.length > 11){
			const shortTitle = title.slice(0, 11)+'...';
			return (shortTitle)
		} else {
			const shortTitle = title
			return (shortTitle)
		}
    }
	
	toBigComp = (comp) => {
		if (comp.length > 10){
			const shortTitle = comp.slice(0, 10)+'...';
			return (shortTitle)
		} else {
			const shortTitle = comp
			return (shortTitle)
		}
    }
	
    
	render () {
		return (
			<View>
				<TouchableOpacity activeOpacity={0.8} style={[ styles.each, { borderColor: myGlobals.lightMode? Theme.branco : Theme.backDark } ]} onPress={() => this.props.onClick()}>
					<Image style={styles.image} source={{uri: this.props.image}}/>
					<View style={{ width: '100%', alignItems: 'flex-end', position: 'absolute'}}>
						<TouchableOpacity style={{ width: 35, height: 35, borderRadius: 50, backgroundColor: 'rgba(229,246,223, 0.8)', justifyContent: 'center', alignItems: 'center', marginRight: 10, marginTop: 10 }} 
							onPress={() => {
								this.changeIcon()
							}} >
							{ this.state.icon &&
								<Icon style={{ marginTop: 3 }} name='heart' id='iconX' color = '#03C04A' size={22}/>
							}
							{ !this.state.icon &&
								<Icon style={{ marginTop: 3 }} name='heart-o' id='iconX' color = '#03C04A' size={22}/>
							}
						</TouchableOpacity>
					</View>
					<View style={[styles.imageLabelContainer, { backgroundColor: myGlobals.lightMode? Theme.backDark : Theme.preto }]}>
						<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 5, paddingHorizontal: 7 }}>
							<Text style={[ CatalogStyle.Txt ,{ color: Theme.branco, fontSize: 16 }]}>{this.toBig(this.props.name)}</Text>
							<Text style={[ CatalogStyle.Txt ,{ color: Theme.branco, fontSize: 16 }]}>{this.props.price}€</Text>
						</View>
						<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 5, paddingHorizontal: 7 }}>
							<Text style={[ styles.txt2 ,{ color: Theme.branco }]}>{this.props.date}</Text>
							<Text style={[ styles.txt ,{ color: Theme.branco }]}>{this.toBigComp(this.props.company)}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
 	
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
    	height: 210,
		backgroundColor: myGlobals.lightMode ? Theme.white : Theme.backDark
	}, imageLabelContainer: {
		width: '100%',
		height: 60,
		backgroundColor: '#262626',
	}, actualRow: {
		flexDirection: 'row'
	}, each: {
		elevation: 5,
        marginTop: 15,
		marginHorizontal: 2.5,
        maxWidth: 190,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignItems: 'flex-end',
		borderRadius: 10,
		overflow: 'hidden'
    }, txt: {
		fontSize: 13,
		fontFamily: 'sans-serif-light',
	}, txt2: {
		fontSize: 10,
		fontFamily: 'sans-serif-light',
	}
})

