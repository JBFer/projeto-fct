import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    ScrollView,
    TextInput,
	Linking,
	TouchableOpacity,
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
            <View style={{ flex: 1, backgroundColor: this.state.themeMode ? Theme.branco : Theme.backDark }}>
                <StatusBar style={'light'} />
				<View style={{ width: '100%', height: 120, alignItems: 'center', justifyContent: 'flex-end' }} >
					<Text style={[ SettingsStyle.title, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Definições</Text>
				</View>
				<View style={{ marginHorizontal: 17, marginTop: 50 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1 }}>
						<Text style={[ SettingsStyle.txt, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Tema { this.state.themeMode ? 'claro' : 'escuro' }</Text>
						<Switch
							style={{ backgroundColor: this.state.themeMode ? Theme.branco : Theme.backDark }}
							trackColor={{ false: "#767577", true: "#00C0F9" }}
							thumbColor={this.state.isEnabled ? "#04d9ff" : "#f4f3f4"}
							onValueChange={this.switchToggler}
							value={this.state.isEnabled}
						/>
					</View>
					
					<View style={{ marginTop: 15, width: '100%', borderBottomWidth: 1, paddingBottom: 8 }}>
						<TouchableOpacity activeOpacity={0.4} style={{  width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Text style={[ SettingsStyle.txt, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Notificações</Text>
							<Icon name='bell' size={22} style={{ color: this.state.themeMode ? Theme.backDark : Theme.branco, marginRight: 12}} />
						</TouchableOpacity>
					</View>
					
					<View style={{ marginTop: 15, width: '100%', borderBottomWidth: 1, paddingBottom: 8 }}>
						<TouchableOpacity activeOpacity={0.4} style={{  width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Text style={[ SettingsStyle.txt, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Sobre</Text>
							<Icon name='book' size={22} style={{ color: this.state.themeMode ? Theme.backDark : '#F1F1F1' , marginRight: 12}} />
						</TouchableOpacity>
					</View>
					
					<View style={{ marginTop: 15, width: '100%', borderBottomWidth: 1, paddingBottom: 8 }}>
						<TouchableOpacity activeOpacity={0.4} style={{  width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<Text style={[ SettingsStyle.txt, { color: this.state.themeMode ? Theme.preto : Theme.branco } ]}>Termos e Condições</Text>
							<Icon name='arrow-right' size={22} style={{ color: this.state.themeMode ? Theme.backDark : Theme.branco, marginRight: 12}} />
						</TouchableOpacity>
					</View>
					
					<TouchableOpacity onPress={() => this.changeTheme()}>
						<Text style={[ SettingsStyle.txt, { color: 'red', marginTop: 10 } ]}>Logout</Text>
					</TouchableOpacity>
				</View>
            </View>
        )
    
}
}