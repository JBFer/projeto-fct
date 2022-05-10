import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'

export default props => {
	
 	return (
		<View style={ styles.eachOne }>
			<TouchableOpacity onPress={() => console.warn(props.idProd)} activeOpacity={0.4}>
      		<View style={ styles.eachOneT }>
				<View style={{ width: '90%', height: '100%', justifyContent: 'center'  }}>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' , justifyContent:'space-between', height: '60%' }}>
						<Text style={[ styles.eachTxt, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{props.name}</Text>
						<Text style={[ styles.eachDate, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{props.qnt}x</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent:'space-between', height: '40%' }}>
						<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
							<Text style={{ color: myGlobals.lightMode ? Theme.preto : Theme.branco, fontSize: 10, marginBottom: 2.2 }}>Preço p/UN</Text>
							<Text style={[ styles.eachPrice, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}> {props.price}€</Text>
						</View>
					</View>
				</View>
     		</View>
			</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		marginVertical: 5,
		width: '100%',
		height: 80,
		borderBottomWidth: 1,
		borderColor: '#D3D3D3',
		//backgroundColor: 'green'
	},
	eachOneT: {
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		//backgroundColor: 'green'
	},
	eachTxt: {
		fontSize: 17
	},
	eachDate: {
		fontSize: 13
	},
	eachPrice: {
		fontSize: 15
	}
})