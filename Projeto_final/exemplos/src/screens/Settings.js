import React, { useState, useEffect } from 'react';
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
import SettingsStyle from '../styles/SettingsStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            themeMode: true,
			isEnabled: false
        }
    }

    
    changeTheme = () => {
		let themeMode = this.state.themeMode
		console.warn(themeMode)
		return themeMode
    }
    
    switchToggler = () => {
        this.state.isEnabled === false ? this.setState({ isEnabled : true}) : this.setState({ isEnabled : false});
        this.state.themeMode === false ? this.setState({ themeMode : true}) : this.setState({ themeMode : false});
    };

    
    render(){
        return (
            <View style={ { flex: 1, backgroundColor: this.state.themeMode ? Theme.branco : Theme.backDark, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
                <StatusBar style={'light'} />
                <Switch
                    style={[ { marginTop: 30 } , { backgroundColor: this.state.themeMode ? Theme.branco : Theme.backDark }]}
                    trackColor={{ false: "#767577", true: "#00C0F9" }}
                    thumbColor={this.state.isEnabled ? "#04d9ff" : "#f4f3f4"}
                    onValueChange={this.switchToggler}
                    value={this.state.isEnabled}
                />
                <Text style={[ SettingsStyle.title, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Settings</Text>
                <Text style={[ SettingsStyle.title, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Mudar de conta</Text>
                <Text style={[ SettingsStyle.title, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Logout</Text>
                <TouchableOpacity onPress={() => this.changeTheme()}>
                    <Text style={[ SettingsStyle.title, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Guardar</Text>
                </TouchableOpacity>
            </View>
        )
    
}
}
