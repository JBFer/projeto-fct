import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    ScrollView,
    TextInput,
	Image,
	SectionList,
	FlatList,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import ProfileStyle from '../styles/ProfileStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import CATEGORIAS from '../data/catgs/CategoriasProfile'
import EachCatg from '../components/EachCatg'

import EachEnc from '../components/EachEnc'
import EachCatgProfile from '../components/EachCatgProfile'

import { lightMode } from '../constants/global'

export default class App extends React.Component {


	renderTitle = ({ section }) => {
		if ( section.title == 'mInfo' ){
			return null;
		} else {
			return <Text style={[ ProfileStyle.title, { color: lightMode ? Theme.preto : Theme.branco, textAlign: 'center' } ]}>{section.title}</Text>
		}
	}
	
	
	renderSection = ({ item, section }) => {
		if ( item.id == 'catg' ){
			return (
				<FlatList
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{ backgroundColor: lightMode ? '#e4e4e4' : Theme.preto }}
				data={item.list}
				style={{ height: 120 }}
				horizontal
				renderItem={this.renderListItemCatg}
				keyExtractor={this.keyExtractor}
			 />
			)
		} else if ( item.id == 'encomendas' ) {
			return (
				<FlatList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={item.list}
					renderItem={this.renderListItemEnc}
					keyExtractor={this.keyExtractor}
				 />
			)
		} else {
			return (
				<>
					<View style={{ alignItems: 'center', height: 80, width: '100%', marginTop: 10 }}>
						<Text style={[ ProfileStyle.name, { color: lightMode ? Theme.preto : Theme.branco } ]} >{ item.company }</Text>
					</View>
					<Text style={[ ProfileStyle.title, { color: lightMode ? Theme.preto : Theme.branco, textAlign: 'center' } ]}>Minhas Informações</Text>
					<View style={{ alignItems: 'center', height: 200, width: '100%' }}>
						<View style={ ProfileStyle.info } >
							<View style={ { flex: 1, justifyContent: 'space-around' } }>
								<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >Empresa:</Text>
								<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >Password:</Text>
								<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >Local de Entrega:</Text>
							</View>
							<View style={ { flex: 1, justifyContent: 'space-around' } }>
								<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >{ item.company }</Text>
								<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >{ item.password }</Text>
								<View>
									<Text style={[ ProfileStyle.spec, { color: lightMode ? Theme.preto : Theme.branco } ]} >{ item.local }</Text>
								</View>
							</View>
						</View>
					</View>
				</>
			)
		}
		
	}
		
	
	
	renderListItemCatg = ({ item }) => {
		return (
			<EachCatgProfile category={ item.category } icon={ item.icon } />
		)
	}
	
	
	renderListItemEnc = ({ item }) => {
		return (
			<EachEnc id={item.id} info={ item.info } precoTt={item.precoTt} data={item.data} />
		)
	}
	
	
	
	keyExtractor = (item) => {
    	return item.id
  	}

	
	
	
	
    render (){
		return (
		<View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.preto } }>
			<StatusBar style={lightMode ? 'dark' : 'light'} />

			<View style={[ ProfileStyle.imageBack, { backgroundColor: lightMode ? '#e4e4e4' : Theme.preto } ]} >
				<View style={{ width: 90, height: 90, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: lightMode ? Theme.preto : Theme.branco }}>
					<Text style={{ fontSize: 35, color: lightMode ? Theme.branco : Theme.preto }}>BL</Text>	
				</View>
			</View>

			<View style={[ ProfileStyle.bodyPart, { backgroundColor: lightMode ? Theme.branco : Theme.backDark } ]}>
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
					ListHeaderComponent={
						<View style={{ height: 20, backgroundColor: 'black' }} />
					}
				/>
				
			</View>
		</View>
  );
	}
}
