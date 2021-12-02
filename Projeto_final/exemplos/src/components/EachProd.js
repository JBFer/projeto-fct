import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import { lightMode } from '../constants/global'
import CatalogStyle from '../styles/CatalogStyle' 

import Products from '../data/prods/Products'



export default props => {
	
	
	const toBig = (title) => {
		if (title.length > 11){
			const shortTitle = title.slice(0, 11)+'...';
			return (shortTitle)
		} else {
			const shortTitle = title
			return (shortTitle)
		}
    }
	
	const toBigComp = (comp) => {
		if (comp.length > 16){
			const shortTitle = comp.slice(0, 16)+'...';
			return (shortTitle)
		} else {
			const shortTitle = comp
			return (shortTitle)
		}
    }
	
    
	
 	return (
		<View>
			<TouchableOpacity activeOpacity={0.8} style={[ styles.each, { borderColor: lightMode? Theme.branco : Theme.backDark } ]} onPress={() => props.onClick(props.name)}>
				<Image style={styles.image} source={{uri: props.image}}/>
				<View style={[styles.imageLabelContainer, { backgroundColor: lightMode? Theme.backDark : Theme.preto }]}>
					<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 5, paddingHorizontal: 7 }}>
						<Text style={[ CatalogStyle.Txt ,{ color: Theme.branco, fontSize: 16 }]}>{toBig(props.name)}</Text>
						<Text style={[ CatalogStyle.Txt ,{ color: Theme.branco, fontSize: 16 }]}>{props.price}€</Text>
					</View>
					<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 5, paddingHorizontal: 7 }}>
						<Text style={[ styles.txt2 ,{ color: Theme.branco }]}>{props.date}</Text>
						<Text style={[ styles.txt ,{ color: Theme.branco }]}>{toBigComp(props.company)}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
    	height: 210,
	}, imageLabelContainer: {
		width: '100%',
		height: 60,
		backgroundColor: '#262626',
	}, actualRow: {
		flexDirection: 'row'
	}, each: {
		elevation: 5,
        marginTop: 15,
		marginLeft: 5,
        width: 190,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

