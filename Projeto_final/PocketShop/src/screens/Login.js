import React from 'react';
import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Linking
} from 'react-native';

import Theme from '../styles/Comum' 
import LoginStyle from '../styles/LoginStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'
import { api_url } from '../constants/host';
import Loading from './Loading';

export default class Login extends React.Component {
    state = {
        email: "",
		password: "",
        login: false
    }

    mandarLogin = () => {
		const login_status = true
        console.log(login_status)
		this.props.is_logged(login_status)
	}

    user_email = txt_email => {
		this.setState({ email: txt_email })
	}

    user_pass = txt_pass => {
		this.setState({ password: txt_pass })
	}

    //email: this.state.email,
    //pass: this.state.password,

    login = () => {
        console.log('entrou')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, pass: this.state.password }),
        }
        console.log('passou aqui tmb')
        fetch(api_url+'login', requestOptions)
            .then(response => response.json())
            .then(data => { 
                if(data.login == true) {
                    console.log('login feito')
                    this.setState({ login: true })
                    this.mandarLogin()
                    //window.location.href = 'Catalog.js'
                    //navigation.navigate('HomeScreen')
                }
                console.log('ta false nino') 
            })
    }

    render() {
        return (
            <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                <Loading 
					isVisible={true}
				/>
                <StatusBar style={lightMode ? 'dark' : 'light'} backgroundColor="white" />
                <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require("../../assets/imageBackground.png")}>
                    <View style={ LoginStyle.topPart } ></View>
                    <View style={ LoginStyle.middlePart } >
                        <View style={{ flex: 1 }} >
                            <Text style={ LoginStyle.title }>PocketShop</Text>
                            <Text style={ LoginStyle.subtitle }>Login</Text>
                        </View>
                        <View style={{ flex: 2.5, width: '100%', alignItems: 'center' }} >
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor={"#474d53"} 
                                style={ LoginStyle.textBox }
                                value={this.state.searchTxt}
								onChangeText={txt_email => this.user_email(txt_email)}
                            />
                            <TextInput 
                                placeholder='Password'
                                placeholderTextColor={"#474d53"}
                                secureTextEntry={true}
                                style={ LoginStyle.textBox }
                                value={this.state.searchTxt}
								onChangeText={txt_pass => this.user_pass(txt_pass)}
                                />
                        </View>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center' }} >
                            <TouchableOpacity style={ LoginStyle.button } activeOpacity={.6} onPress={() => this.login()} >
                                <Text style={{ fontSize: 19 }} >Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.4} onPress={() => Linking.openURL("http://jf-api.epizy.com/")} >
                                <Text style={{ color: '#1520A6' }} >Termos e condições</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ LoginStyle.bottomPart } ></View>
                </ImageBackground>
            </View>
        )
    }
}