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
import HomeStyle from '../styles/HomeStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default function App({ navigation }) {
    const [lightMode, setlightMode] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false)
    
    const switchToggler = () => {
        isEnabled === false ? setIsEnabled(true) : setIsEnabled(false);
        lightMode === true ? setlightMode(false) : setlightMode(true);
    };
    
    return (
        <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
            <StatusBar style={lightMode ? 'dark' : 'light'} />
            <Switch
                style={[ { marginTop: 30 } , { backgroundColor: lightMode ? Theme.branco : Theme.backDark }]}
                trackColor={{ false: "#767577", true: "#00C0F9" }}
                thumbColor={isEnabled ? "#04d9ff" : "#f4f3f4"}
                onValueChange={switchToggler}
                value={isEnabled}
            />
            <Text style={[ HomeStyle.title, { color: lightMode ? Theme.preto : Theme.branco } ]}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Definicoes')}>
                <Icon2 name='settings' color={ lightMode ? Theme.preto : Theme.branco } size={50} />
            </TouchableOpacity>
                
        </View>
  );
}
