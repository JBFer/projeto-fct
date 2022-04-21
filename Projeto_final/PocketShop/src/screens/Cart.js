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

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import myGlobals from '../constants/global'

export default function Cart({ navigation }) {

    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark }}>
            <StatusBar style={myGlobals.lightMode ? 'dark' : 'light'} />
            <View style={ { flex: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark } }>
                <View>
                </View>
            </View>
        </ScrollView>
  );
}
