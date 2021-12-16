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
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import ProfileStyle from '../styles/ProfileStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'

export default function App({ navigation }) {

    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
            <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                <StatusBar style={lightMode ? 'dark' : 'light'} />
                <View style={ ProfileStyle.topPart }>
		
                </View>
                <View style={ ProfileStyle.titlePart }>
                    <Text style={[ ProfileStyle.welcome, { color: lightMode ? Theme.preto : Theme.branco } ]}>Perfil</Text>
                </View>
            </View>
        </ScrollView>
  );
}
