import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'

export default props => {
	
	const mandarEnc = () => {
		const propEnc = {
			id: props.id,
			precoTt: props.precoTt,
			info: props.info,
			data: props.data,
			numEnc: props.numEnc,
			cont: props.cont,
			moradaFaturacao: props.moradaFaturacao,
			moradaEntrega: props.moradaEntrega
		}
		props.addEnc(propEnc)
	}
	
 	return (
		<View style={ styles.eachOne }>
      		<View style={ styles.eachOneT }>
				<View style={{ width: '80%', height: '100%', justifyContent: 'center', backgroundColor: myGlobals.lightMode ? 'white' : Theme.backDark  }}>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' , justifyContent:'space-between', height: '40%' }}>
						<Text style={[ styles.eachTxt, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>Nº Encomenda { props.numEnc }</Text>
						<Text style={[ styles.eachPrice, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{props.precoTt}€</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' , justifyContent:'space-between', height: '40%' }}>
						<Text style={[ styles.eachDate, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{ props.info.length } produtos</Text>
						<Text style={[ styles.eachDate, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]}>{props.data}</Text>
					</View>
				</View>
				<TouchableOpacity activeOpacity={0.7} style={{ width: '20%', height: '100%' }} onPress={() => {mandarEnc()}}>
					<View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: myGlobals.lightMode ? 'white' : Theme.backDark , borderTopRightRadius: 10 }}>
						<Icon name='info-circle' size={20} style={{ color: myGlobals.lightMode ? Theme.preto : Theme.branco }} />
					</View>
				</TouchableOpacity>
     		</View>
		</View>
  	)
}

const styles = StyleSheet.create({
	eachOne: {
		marginVertical: 10,
		backgroundColor: '#D3D3D3',
		width: '100%',
		height: 100,
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