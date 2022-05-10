import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    Text,
    View,
    Button,
	SectionList,
	FlatList,
    TouchableOpacity,
	ActivityIndicator
} from 'react-native';

import Theme from '../styles/Comum' 
import ProfileStyle from '../styles/ProfileStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import CATEGORIAS from '../data/catgs/CategoriasProfile'

import EachEnc from '../components/EachEnc'
import EachMor from '../components/EachMor'

import EncDetails from './EncDetails'

import myGlobals from '../constants/global'
import { products_user } from '../services/products';
import { login } from '../services/user';
import { api_url } from '../constants/host';


export default class App extends React.Component {
	state = {
		data:{},
		orders: [],
		moradas: [],
		loading: true,
		qntTt: 0,
		weight: true,
		choose: 'encomendas',
		visibleModal: false,
		info: [{}],
		id: '0',
		precoTt: 0,
		order_date: '',
		numEnc: 0,
		cont: '',
		moradaFaturacao: '',
		moradaEntrega: '',
	}

	componentDidMount() {
		this.fetchdata()
	}

	fetchdata = () => {
		fetch( api_url+'user/info')
			.then(response => response.json())
			.then(data => {
				this.setState({ data: data.list[0] });
			})
		fetch( api_url+'user/orders')
			.then(response => response.json())
			.then(data => {
				this.setState({ orders: data.list, loading: false });
			})
		fetch( api_url+'user/moradas')
			.then(response => response.json())
			.then(data => {
				this.setState({ moradas: data.list });
			})
	}

	renderTitle = ({ section }) => {
			return null;
	}
	
	
	renderSection = ({ item, section }) => {
		if ( item.id == 'encomendas' && this.state.choose == 'encomendas' ) {
			return (
				<>
					<FlatList
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						data={this.state.orders}
						renderItem={this.renderListItemEnc}
						keyExtractor={this.keyExtractor}
					/>
				</>
			)
		} else if ( item.id == 'encomendas' && this.state.choose != 'encomendas' ) {
			return null
		} else if ( item.id == 'info' && this.state.choose != 'info' ) {
			return null
		} else if ( item.id == 'info' && this.state.choose == 'info' ) {
			return (
				<>
					<View style={ ProfileStyle.info } >
						<View style={{ width: '90%', height: 60, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 25 } ]} >Empresa:</Text>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ this.state.data.name }</Text>
						</View>
						<View style={{ width: '90%', height: 60, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 25 } ]} >Email:</Text>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ this.state.data.email }</Text>
						</View>
						<View style={{ width: '90%', height: 60, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 25 } ]} >Telefone:</Text>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ this.state.data.tel }</Text>
						</View>
						<View style={{ width: '90%', height: 60, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginRight: 25 } ]} >Contribuinte:</Text>
							<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ this.state.data.contribuinte }</Text>
						</View>
						<FlatList
							style={{ width: '90%', borderRadius: 15, overflow: 'hidden', marginTop: 10 }}
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							data={this.state.moradas}
							ListHeaderComponent={this.renderHeaderMor}
							renderItem={this.renderListItemMor}
							keyExtractor={this.keyExtractorMor}
						/>
					</View>
				</>
			)
		}
		
	}
	
	showModalEnc = (item) => {
		const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: item.id }),
        }
        fetch(api_url+'user/orders/details', requestOptions)
            .then(response => response.json())
            .then(data => { 
				this.setState({ id: item.id, info: data.list, qntTt: item.qntTt, precoTt: item.precoTt, order_date: item.order_date, numEnc: item.id, cont: item.cont, moradaFaturacao: item.moradaFaturacao, moradaEntrega: item.moradaEntrega })
				this.setState({ visibleModal: true })
            })
	}

	renderHeader = () => {
		return(
			<View style={{height: 10, width: '100%'}} />
		)
	}
	
	renderListItemEnc = ({ item }) => {
		return (
			<EachEnc id={item.idOrders} qntTt={item.qntTt} numEnc={item.idOrders} precoTt={item.priceTt} order_date={item.order_date} cont={item.contribuinte_order} moradaEntrega={item.morada_entrega} moradaFaturacao={item.morada_fatura} item={item} addEnc={(item) => this.showModalEnc(item) } />
		)
	}
	
	keyExtractor = (item) => {
    	return item.idOrders.toString()
  	}

	renderHeaderMor = () => {
		return (
			<View style={{ width: '100%', backgroundColor: '#33333a', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Text style={[ ProfileStyle.title, { color: myGlobals.lightMode ? Theme.preto : Theme.branco, marginLeft: 10 } ]} >Moradas</Text>
				<TouchableOpacity style={{ marginRight: 10 }} activeOpacity={0.7} onPress={() => { console.log("Bing Bong") }}>
					<Icon2 name='add-circle' color={ myGlobals.lightMode ? Theme.preto : Theme.branco } size={25} />
				</TouchableOpacity>
			</View>
		)
	}

	renderListItemMor = ({ item }) => {
		return (
			<EachMor id={item.idAdresses} name={item.name} adress={item.adress} type={item.type}/>
		)
	}
	
	keyExtractorMor = (item) => {
    	return item.idAdresses.toString()
  	}
	
	renderHeader = () => {
		return (
			<View style={{ height: 40, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' , flexDirection: 'row', borderColor: '#D3D3D3' }}>
				<TouchableOpacity onPress={() => this.setState({ choose: 'encomendas', weight: true })} style={{ flex: 1, alignItems: 'center', borderRightWidth: 0.6, borderColor: '#D3D3D3'  }} activeOpacity={0.6}>
					<Text style={{ fontSize: 17, color: myGlobals.lightMode ? Theme.preto : Theme.branco, fontWeight: this.state.weight ? 'bold' : 'normal' }}>Encomendas</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.setState({ choose: 'info', weight: false })} style={{ flex: 1, borderLeftWidth: 0.6, alignItems: 'center', borderColor: '#D3D3D3' }} activeOpacity={0.6}>
					<Text style={{ fontSize: 17, color: myGlobals.lightMode ? Theme.preto : Theme.branco, fontWeight: this.state.weight ? 'normal' : 'bold' }}>Conta</Text>
				</TouchableOpacity>
			</View>
		)
	}

	
    render(){
		const { navigation } = this.props;
		if (!this.state.loading){
			return (
				<View style={ { flex: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.preto } }>
					<StatusBar style={myGlobals.lightMode ? 'dark' : 'light'} />
					<View style={[ ProfileStyle.imageBack, { backgroundColor: myGlobals.lightMode ? '#e4e4e4' : '#333333' } ]} >
						<View style={{ width: '100%', height: '29%', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 15 }}>
							<TouchableOpacity onPress={() => navigation.navigate('Definicoes')} onThemeChange={() => {}}>
								<Icon2 name='menu' color={ myGlobals.lightMode ? Theme.preto : Theme.branco } size={38} />
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
							<Text style={[ ProfileStyle.name, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ this.state.data.name }</Text>
							<Text style={{ fontSize: 17 ,color: myGlobals.lightMode ? Theme.preto : Theme.branco }} >{ this.state.data.email }</Text>
						</View>
					</View>
					<EncDetails 
						themeMode={myGlobals.lightMode} 
						isVisible={this.state.visibleModal} 
						onCancel={() => { 
							this.setState({ visibleModal: false })
						}}
						info={this.state.info}
						qntTt={this.state.qntTt}
						id={this.state.id}
						precoTt={this.state.precoTt}
						order_date={this.state.order_date}
						numEnc={this.state.numEnc}
						cont={this.state.cont}
						moradaFaturacao={this.state.moradaFaturacao}
						moradaEntrega={this.state.moradaEntrega}
					/>
					<View style={[ ProfileStyle.bodyPart, { backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark, elevation: 10 } ]}>
							<SectionList
								contentContainerStyle={{ paddingHorizontal: 10 }}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								style={{ width: '100%', height: '100%', overflow: 'hidden' }}
								sections={CATEGORIAS}
								stickySectionHeadersEnabled={false}
								renderSectionHeader={this.renderTitle}
								renderItem={this.renderSection}
								ListFooterComponent={
									<View style={{ height: 20 }} />
								}
								ListHeaderComponent={this.renderHeader}
							/>
						
					</View>
				</View>
		 	);
		} else {
			return(
				<View style={ { flex: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark, justifyContent: 'center', alignItems: 'center' } }>
					<StatusBar style={myGlobals.lightMode ? 'dark' : 'light'} />
					<ActivityIndicator size={'large'} color={'white'} />
				</View>
			)
		}
	}
}
