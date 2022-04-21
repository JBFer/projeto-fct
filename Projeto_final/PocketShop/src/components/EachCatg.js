import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  

export default props => {
 	return (
		<View style={ styles.eachOne }>
      		<TouchableOpacity activeOpacity={0.5} onPress={() => {props.onAdicionarStack()}} style={ styles.eachOneT }>
				<Icon name={props.icon} size={35}/>
		 		<Text style={ styles.eachTxt }>{props.category}</Text>
     		</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		minWidth: 95,
		margin: 2
	}, eachOneT: {
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'green'
	}, eachTxt: {
		fontSize: 15
	}
})
