import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'

export default props => {
	
 	return (
		<View style={ styles.eachOne }>
				<Text style={ styles.eachAddress }>{props.address}</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
					<Text style={ styles.eachName }>{props.name}</Text>
					<Text style={ styles.eachName }>{props.type}</Text>
				</View>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		backgroundColor: myGlobals.lightMode ? 'white' : '#ABABAB',
		width: '100%',
		minHeight: 50,
		paddingHorizontal: 5,
		//backgroundColor: 'green'
	},
	eachAddress: {
		fontSize: 17
	},
	eachName: {
		fontSize: 15
	}
})