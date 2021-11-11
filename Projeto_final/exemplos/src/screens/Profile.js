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

export default function App({ navigation }) {
    const [lightMode, setlightMode] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false)
    
    const switchToggler = () => {
        isEnabled === false ? setIsEnabled(true) : setIsEnabled(false);
        lightMode === true ? setlightMode(false) : setlightMode(true);
        const luz = lightMode;
    };
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
            <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                <StatusBar style={lightMode ? 'dark' : 'light'} />
                <View style={ ProfileStyle.topPart }>
                    <Switch
                        trackColor={{ false: "#767577", true: "#00C0F9" }}
                        thumbColor={isEnabled ? "#04d9ff" : "#f4f3f4"}
                        onValueChange={switchToggler}
                        value={isEnabled}
                    />
                </View>
                <View style={ ProfileStyle.titlePart }>
                    <Text style={[ ProfileStyle.welcome, { color: lightMode ? Theme.preto : Theme.branco } ]}>Perfil</Text>
                </View>
            </View>
        </ScrollView>
  );
}
