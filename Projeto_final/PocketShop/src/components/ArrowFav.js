import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../styles/Comum'  
import { lightMode } from '../constants/global'
import CatalogStyle from '../styles/CatalogStyle' 

import Products from '../data/prods/Products'



export default props => {
	const [icon, setIcon] = useState(true)
	
	const changeIcon = () => {
		icon ? setIcon(false) : setIcon(true)
		icon ? console.warn('O produto de id ' + props.un + ' foi retirado aos favoritos' ) : console.warn('O produto de id ' + props.un + ' foi adicionado aos favoritos' )
	}
	
	const toBig = (title) => {
		if (title.length > 40){
			const shortTitle = title.slice(0, 40)+'...';
			return (shortTitle)
		} else {
			const shortTitle = title
			return (shortTitle)
		}
    }
	
	const toBigComp = (comp) => {
		if (comp.length > 14){
			const shortTitle = comp.slice(0, 14)+'...';
			return (shortTitle)
		} else {
			const shortTitle = comp
			return (shortTitle)
		}
    }
	
    
	
 	return (
		<View>
			<TouchableOpacity activeOpacity={0.8} style={[ styles.each, { borderColor: lightMode? Theme.branco : Theme.backDark } ]} onPress={() => props.onClick()}>
				<View transform={([{ rotate: '62deg' }])} style={ styles.imgPlace }>
					<Image transform={([{ rotate: '-62deg' }])} resizeMode='cover' style={styles.image} source={{uri: props.image}} />
				</View>
				<View style={ styles.imgLabelTop } >
					<View style={{ height: '100%', width: '75%', justifyContent: 'center' }}>
						<Text style={ styles.labelTxt }>{toBig(props.name)}</Text>
					</View>
					<Text style={ styles.labelTxt }>{props.price}€</Text>
				</View>
				<View style={ styles.imgLabelBottom } >
					<Text style={ styles.labelTxt }>{toBigComp(props.company)}</Text>
					<TouchableOpacity style={{ width: 35, height: 35, alignItems: 'flex-end', justifyContent: 'center' }} 
						onPress={() => {
							changeIcon()
							props.pressCheck(props.un)
						}} >
						{ icon &&
							<Icon name='heart' id='iconX' color = '#03C04A' size={22}/>
						}
						{ !icon &&
							<Icon name='heart-o' id='iconX' color = '#03C04A' size={22}/>
						}
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	each: {
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		overflow: 'hidden',
		width: '95%',
		height: 130,
		marginTop: 20,
		elevation: 4,
		backgroundColor: lightMode ? Theme.branco : Theme.preto,
		marginLeft: 10,
		marginRight: 10
	},
	imgPlace: {
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
		width: '60%',
		height: '123%',
		position: 'absolute',
		overflow: 'hidden',
		marginLeft: -55,
		borderTopWidth: 1,
		borderColor: lightMode? Theme.preto : Theme.branco,
		zIndex: 100
	},
	imgLabelTop: {
		//backgroundColor: 'lightgreen',
		flexDirection: 'row',
		alignItems: 'center', 
		justifyContent: 'space-between',
		marginRight: 10,
		marginLeft: '37%',
		width: '60%',
		height: '50%'
	},
	imgLabelBottom: {
		//backgroundColor: 'lightblue',
		flexDirection: 'row',
		alignItems: 'center', 
		justifyContent: 'space-between',
		marginRight: 10,
		marginLeft: '46%',
		width: '51%',
		height: '50%'
	},
	image: {
		width: '100%',
		height: '101%',
	},
	labelTxt: {
		fontSize: 15,
		color: lightMode? Theme.preto : Theme.branco
	}
})
