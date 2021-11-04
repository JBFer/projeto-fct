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

export default function App() {
    
    const STORAGE_KEY = '@save_lightMode'
    
    const [lightMode, setlightMode] = useState()
    const [isEnabled, setIsEnabled] = useState(false)
    
    
    const lerData = async() => {
        try {
            const themeMode = await AsyncStorage.getItem(STORAGE_KEY)
            
            if (themeMode == null && lightMode == null) {
                setlightMode(true)
                console.warn(themeMode + ' entrou no primeiro')
            } else {
                setlightMode(themeMode)
                console.warn(themeMode + ' entrou no segundo')
            }
                
            
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    
    const saveData = async() => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lightMode))
            console.warn(await AsyncStorage.getItem(STORAGE_KEY) + ' deu update')
            console.warn(JSON.parse((lightMode)) + ' foi o que deu update')
            alert('Data successfully saved')
        } catch (e) {
            alert(e)
        }
    }
    
    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared!')
        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }
    
    const switchToggler = () => {
        isEnabled === false ? setIsEnabled(true) : setIsEnabled(false);
        lightMode === false ? setlightMode(true) : setlightMode(false);
        saveData()
    };
    
    useEffect(() => {
        lerData()
    }, [])
    
    
    return (
        <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
        <StatusBar style={'light'} />
            <Switch
                style={[ { marginTop: 30 } , { backgroundColor: lightMode ? Theme.branco : Theme.backDark }]}
                trackColor={{ false: "#767577", true: "#00C0F9" }}
                thumbColor={isEnabled ? "#04d9ff" : "#f4f3f4"}
                onValueChange={switchToggler}
                value={isEnabled}
            />
            <Text style={[ SettingsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>Settings</Text>
        
        <Text style={[ SettingsStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>{lightMode}</Text>
        <TouchableOpacity onPress={clearStorage}>
            <Text>Limpar</Text>
        </TouchableOpacity>
        </View>
    );
    
}
