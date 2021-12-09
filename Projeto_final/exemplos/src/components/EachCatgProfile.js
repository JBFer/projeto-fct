import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import { lightMode } from '../constants/global'


export default props => {
	
	const mandarCatg = () => {
		const idCatg = {
			id: props.id,
			category: props.category
		}
		props.addCatg(idCatg)
	}
	
 	return (
		<View style={ styles.eachOne }>
      		<TouchableOpacity activeOpacity={0.5} style={ styles.eachOneT } onPress={() => {mandarCatg()}}>
				<Icon name={props.icon} size={35} style={{ color: lightMode ? Theme.preto : Theme.branco }} />
		 		<Text style={[ styles.eachTxt, { color: lightMode ? Theme.preto : Theme.branco } ]}>{props.category}</Text>
     		</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		justifyContent: 'center',
		width: 130,
		marginBottom: 30,
		marginTop: 20
		//backgroundColor: 'green'
	}, eachOneT: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'green'
	}, eachTxt: {
		fontSize: 15
	}
})
