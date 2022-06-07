import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    Text,
    View,
	Alert,
    ScrollView,
	Image,
	FlatList,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 

import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import myGlobals from '../constants/global'
import { api_url } from '../constants/host';
import { TextInput } from 'react-native-gesture-handler';

const Details = ({ route, params, navigation }) => {
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([]);
	const [data, setData] = useState({});
	const [fatura, setFatura] = useState({});

	let priceTt = route.params.priceTt;
	let id = route.params.id;
	let name = route.params.name;
	let price = route.params.price;
	let qnt = route.params.qnt;

	useEffect(() => {
		//console.warn(id);
		fetch( api_url+'user/info')
			.then(response => response.json())
			.then(data => {
				//console.log(data.list[0])
				setData(data.list[0])
			})

        fetch( api_url+'user/moradas')
            .then(response => response.json())
            .then(data => {
                //console.log(data.list);
				setItems(data.list)
				setLoading(false)
				getFaturacao(data.list)
        })
	}, [])

	const doOrder = () => {
		let entrega = getLabel()
		let qntTt = getQntTt()
		let precoTt = priceTt.toFixed(2)
/* 		console.log(precoTt)
		console.log(qntTt)
		console.log(data.contribuinte)
		console.log(fatura.address)
		console.log(entrega)
		console.log(id)
		console.log(name)
		console.log(price)
		console.log(qnt)
		console.log('_____________________________________') */
		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
				priceTt: precoTt,
				qntTt: qntTt,
				contribuinte_order: data.contribuinte,
				morada_fatura: fatura.address,
				morada_entrega: entrega,
				id_prod: id,
				name_prod: name,
				price_prod: price,
				qnt_prod: qnt
			}),
		}
		fetch(api_url+'make_order', requestOptions)
			.then(response => response.json())
			.then(data => { 
				//console.log(data)
				fetch(api_url+'products/eli_carrinho')
					.then(response => response.json())
					.then(data => {
						//console.log(data)
					}) 
				Alert.alert(
					'Encomenda completa!',
					'Pode encontrar a sua encomenda no histórico de encomendas presente no perfil. Caso a encomenda não apareça no histórico basta recarregar o perfil.',
					[{text: 'Ok', onPress: () => navigation.goBack()}]
				)
			}) 
		for (let i = 0; i < id.length; i++){
			fetch(api_url+'products/update_stock/' + id[i] + '/' + qnt[i] )
				.then(response => response.json())
				.then(data => { 
					//console.log(data)
				}) 
		}
	}

	const getFaturacao = (array) => {
		var result = array.filter(obj => {
			return obj.type === 'faturação'
		})
		setFatura(result[0])
	}

	const getLabel = () => {
		var result2 = items.filter(obj => {
			return obj.idAddresses === value
		})
		return result2[0].address
	}

	const getQntTt = () => {
		let soma = 0
		for (let i = 0; i < qnt.length; i++){
			soma += parseInt(qnt[i])
		}
		return soma
	}

	return(
		<View style={{ flex: 1, backgroundColor: '#C4C4C4', justifyContent: 'flex-end', alignItems: 'center' }}>
			<View style={{ width: '90%', height: '80%', backgroundColor: '#DEDEDE', marginBottom: 45, elevation: 15, borderRadius: 40, padding: 10 }}>
			<View style={{ width: '100%', height: '6%', alignSelf: 'center'  }}>
				<Image resizeMode='cover' style={{ width: '70%', height: 100, alignSelf: 'center' }} source={require('../../assets/PocketShop.png')} />
			</View>
				<View style={{ width: '90%', height: '65%', alignContent: 'center', justifyContent: 'space-evenly', alignSelf: 'center', /* backgroundColor: 'green' */ }}>
					<View style={{minHeight: '7%', width: '100%',}}>
						<Text style={{marginBottom: 2}}>
							CONTRIBUINTE
						</Text>
						<View style={{ flexDirection: 'row', width: '100%', minHeight: '7%', backgroundColor: '#EAEAEA', borderRadius: 10, padding: 10, justifyContent: 'space-between' }} >
							<Text style={{ fontSize: 17, width: '92%' }}>{data.contribuinte}</Text>
							<Icon3 name='lock' size={20} style={{ color: Theme.preto, paddingTop: 4, paddingLeft: 10 }} />
						</View>
					</View>
					<View style={{minHeight: '7%', width: '100%',}}>
						<Text style={{marginBottom: 2}}>
							MORADA DE FATURAÇÃO
						</Text>
						<View style={{ flexDirection: 'row', width: '100%', minHeight: '7%', backgroundColor: '#EAEAEA', borderRadius: 10, padding: 10, justifyContent: 'space-between' }} >
							<Text style={{ fontSize: 17, width: '92%' }}>{fatura.address}</Text>
							<Icon3 name='lock' size={20} style={{ color: Theme.preto, paddingTop: 4, paddingLeft: 10 }} />
						</View>
					</View>
					<View>
						<Text>MORADA DE ENTREGA</Text>
						<DropDownPicker
							style={{ backgroundColor: '#EAEAEA' }}
							schema={{
								label: 'name',
								value: 'idAddresses'
							}}
							open={open}
							listItemContainerStyle={{
								backgroundColor: '#EAEAEA'
							}}
							value={value}
							items={items}
							loading={loading}
							setOpen={setOpen}
							setValue={setValue}
							setItems={setItems}
							mode="BADGE"
							placeholder="Selecione uma morada"
						/>
					</View>
				</View>
				<View style={{ width: '90%', height: '25%', alignContent: 'center', justifyContent: 'space-evenly', alignSelf: 'center' }}>
					<Text style={{ fontSize: 17 }}> Total a pagar: {priceTt.toFixed(2)}€</Text>
					<TouchableOpacity 
						activeOpacity={0.7}
						disabled={value ? false : true }
						style={{ opacity: value ? 1 : 0.5, width: '100%', borderRadius: 15, backgroundColor: '#2C2C2C', padding: 10, alignItems: 'center' }}
						onPress={() => {
							doOrder()
						}}
					>
						<Text style={{ fontSize: 17, color: 'white' }}>Efetuar compra</Text>
					</TouchableOpacity>
					<Text style={{ textAlign: 'center', fontSize: 12 }}>Ao clicar no botão acima será realizado {"\n"} o processo de encomenda!</Text>
				</View>
			</View>
		</View>
	)
			
		
}

export default Details;
