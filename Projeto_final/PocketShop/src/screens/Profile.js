import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    Text,
    View,
    Button,
	SectionList,
	FlatList,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import ProfileStyle from '../styles/ProfileStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import CATEGORIAS from '../data/catgs/CategoriasProfile'

import EachEnc from '../components/EachEnc'

import EncDetails from './EncDetails'

import myGlobals from '../constants/global'
import { products_user } from '../services/products';
import { login } from '../services/user';


export default class App extends React.Component {
	state = {
		choose: 'encomendas',
		visibleModal: false,
		info: [{}],
		id: '0',
		precoTt: 0,
		data: '',
		numEnc: 0,
		cont: '',
		moradaFaturacao: '',
		moradaEntrega: ''
	}

	renderTitle = ({ section }) => {
			return null;
	}
	
	
	renderSection = ({ item, section }) => {
		if ( item.id == 'encomendas' && this.state.choose == 'encomendas' ) {
			return (
				<>
					<FlatList
						maxToRenderPerBatch={5}	
						initialNumToRender={8}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						data={item.list}
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
					<View style={{ alignItems: 'center', height: 500, width: '100%' }}>
						<View style={ ProfileStyle.info } >
							<View style={ { flex: 1, justifyContent: 'space-around' } }>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Empresa:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Contribuinte:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Email:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Telefone:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Morada de Entrega:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Morada de Faturação:</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >Password:</Text>
							</View>
							<View style={ { flex: 1, justifyContent: 'space-around' } }>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.company }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.contribuinte }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.email }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.telefone }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.moradaEnt }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.moradaFat }</Text>
								<Text style={[ ProfileStyle.spec, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >{ item.password }</Text>
							</View>
						</View>
					</View>
				</>
			)
		}
		
	}
	
	showModalEnc = (propEnc) => {
		this.setState({ visibleModal: true })
		this.setState({ id: propEnc.id, info: propEnc.info, precoTt: propEnc.precoTt, data: propEnc.data, numEnc: propEnc.numEnc, cont: propEnc.cont, moradaFaturacao: propEnc.moradaFaturacao, moradaEntrega: propEnc.moradaEntrega })
	}

	renderHeader = () => {
		return(
			<View style={{height: 10, width: '100%'}} />
		)
	}
	
	renderListItemEnc = ({ item }) => {
		return (
			<EachEnc id={item.id} numEnc={item.numEnc} info={ item.info } precoTt={item.precoTt} data={item.data} cont={item.cont} moradaFaturacao={item.moradaFaturacao} moradaEntrega={item.moradaEntrega} addEnc={(propEnc) => this.showModalEnc(propEnc) } />
		)
	}
	
	keyExtractor = (item) => {
    	return item.id
  	}
	
	
	renderHeader = () => {
		return (
			<View style={{ height: 40, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' , flexDirection: 'row', borderColor: '#D3D3D3' }}>
				<TouchableOpacity onPress={() => this.setState({ choose: 'encomendas' })} style={{ flex: 1, alignItems: 'center', borderRightWidth: 0.6, borderColor: '#D3D3D3'  }} activeOpacity={0.6}>
					<Text style={{ fontSize: 17, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>Encomendas</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.setState({ choose: 'info' })} style={{ flex: 1, borderLeftWidth: 0.6, alignItems: 'center', borderColor: '#D3D3D3' }} activeOpacity={0.6}>
					<Text style={{ fontSize: 17, color: myGlobals.lightMode ? Theme.preto : Theme.branco }}>Conta</Text>
				</TouchableOpacity>
			</View>
		)
	}

	
	
	
	
    render (){
		const { navigation } = this.props;
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
					<Text style={[ ProfileStyle.name, { color: myGlobals.lightMode ? Theme.preto : Theme.branco } ]} >BigLevel</Text>
					<Text style={{ fontSize: 17 ,color: myGlobals.lightMode ? Theme.preto : Theme.branco }} >biglevel@test.com</Text>
				</View>
			</View>
			<EncDetails 
				themeMode={myGlobals.lightMode} 
				isVisible={this.state.visibleModal} 
				onCancel={() => { 
					this.setState({ visibleModal: false })
				}}
				info={this.state.info}
				id={this.state.id}
				precoTt={this.state.precoTt}
				data={this.state.data}
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
	}
}
