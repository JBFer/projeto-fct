import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../styles/Comum'  
import myGlobals from '../constants/global'
import { api_url } from '../constants/host';


export default props => {
	const [count, setCount] = useState(1)
	const [prodList, setProdList] = useState({})
	const [nameFil, setName] = useState()
	const [compFil, setComp] = useState()

	useEffect(() => {
			fetch( api_url+'products/id/'+props.id)
				.then(response => response.json())
				.then(data => {
					setProdList(data.list[0])
					toBig(data.list[0].name, data.list[0].company)
					let a = data.list[0].price
					props.setTotal(a, 0, 1)
				})
	}, [])

	let name = props.name ?? prodList.name;
	let company = props.company ?? prodList.company;
	let price = props.price ?? prodList.price;
	
	const toBig = (name1, comp1) => {
		if (name1.length > 32){
			let shortName = name1.slice(0, 32)+'...';
			setName(shortName)
		} else {
			let shortName = name1
			setName(shortName)
		}
		if (comp1.length > 25){
			let shortComp = comp1.slice(0, 25)+'...';
			setComp(shortComp)
		} else {
			let shortComp = comp1
			setComp(shortComp)
		}
    }

	
 	return (
		<View>
			<TouchableOpacity activeOpacity={0.7} style={ styles.each } onPress={() => {props.goBack(), props.nav.navigate('ProductDetails', { 
					id: props.id,
					name: name,
					company: company
				})}
			}>
				<View style={{ flex: 1 }}>	
					<Text style={{ fontSize: 16, color: myGlobals.lightMode ? Theme.preto : Theme.branco }} >{nameFil}</Text>
					<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={{ fontSize: 16, color: myGlobals.lightMode ? Theme.preto : Theme.branco }} >{compFil}</Text>
						<Text style={{ fontSize: 14, color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 10 }} >{price}€</Text>
					</View>
				</View>
				<TextInput
					keyboardType='numeric'
					maxLength={3}
					defaultValue={count.toString()}
					style={{ maxWidth: 50 , backgroundColor: '#6f6f7e', height: 40, marginRight: 5, borderRadius: 4, paddingHorizontal: 3, fontSize: 16, textAlign: 'center', color: myGlobals.lightMode ? Theme.preto : Theme.branco }}
					onChangeText={qnt => { 
						props.setTotal(price, count, qnt)
						setCount(qnt)
					}}
					value={count.toString()}
				/>
				<Text style={{ fontSize: 14, color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 3 }} >uni</Text>
			</TouchableOpacity>
		</View>
  	)
}

const styles = StyleSheet.create({
	each: {
		width: '100%',
        height: 50,
		elevation: 5,
		backgroundColor: myGlobals.lightMode ? '#C4C4C4' : '#575763',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 5,
        borderLeftWidth: 5,
		borderRadius: 5,
        borderLeftColor: '#03C04A',
        paddingLeft: 10,
		overflow: 'hidden'
	}
})

