import React from 'react';
import { Text, View, Image } from 'react-native';

import Theme from '../styles/Comum'  
import { lightMode } from '../constants/global'


export default props => {
 	return (
		<View style={ { width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' } }>
            <Text style={{ fontSize: 25, color: lightMode ? Theme.preto : Theme.branco }}>Loading...</Text>
            <Image style={{ width: 140, height: 140 }} source={require('../../assets/loadingGif.gif')} />
        </View>
  	)
}