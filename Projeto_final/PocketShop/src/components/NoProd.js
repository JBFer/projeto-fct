import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Theme from '../styles/Comum'  
import { lightMode } from '../constants/global'


export default props => {
 	return (
		<View style={{ height: 200, borderRadius: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 38 }}>
			<Text style={{ fontSize: 17 }}>Sem produtos registados</Text>
			<Image style={{ width: 100, height: 100, resizeMode: 'stretch' }} source={require('../../assets/lightLogo.png')}/>
		</View>
  	)
}

