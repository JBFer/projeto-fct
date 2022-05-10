import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'

export default props => {
	
 	return (
		<View style={ styles.eachOne }>
				<Text style={ styles.eachAdress }>{props.adress}</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
					<Text style={ styles.eachName }>{props.name}</Text>
					<Text style={ styles.eachName }>{props.type}</Text>
				</View>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		backgroundColor: '#ABABAB',
		width: '100%',
		minHeight: 50,
		borderTopWidth: 1,
		borderTopColor: 'white',
		paddingHorizontal: 5,
		//backgroundColor: 'green'
	},
	eachAdress: {
		fontSize: 17
	},
	eachName: {
		fontSize: 15
	}
})