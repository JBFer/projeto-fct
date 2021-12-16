import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  

export default props => {
	
	const mandarProps = () => {
		const idCatg = {
			id: props.id,
			icon: props.icon,
			category: props.category
		}
		props.onAdicionarStack(idCatg)
	}
	
	
 	return (
		<View style={ styles.eachOne }>
      		<TouchableOpacity activeOpacity={0.5} onPress={() => {mandarProps()}} style={ styles.eachOneT }>
				<Icon name={props.icon} size={35}/>
		 		<Text style={ styles.eachTxt }>{props.category}</Text>
     		</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		width: '33.3%',
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
