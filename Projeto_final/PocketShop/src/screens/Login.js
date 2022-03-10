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

import { lightMode } from '../constants/global'
import { api_url } from '../constants/host';

export default class Login extends React.Component {
    state = {
        email: "",
		password: "",
        login: false,
        txtLog: "",
        color: 'red'
    }

    mandarLogin = () => {
		const login_status = true
        //console.log(login_status)
		this.props.is_logged(login_status)
	}

    user_email = txt_email => {
		this.setState({ email: txt_email })
	}

    user_pass = txt_pass => {
		this.setState({ password: txt_pass })
	}

    login = () => {
        this.setState({ txtLog: "" })
        //console.log('entrou')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, pass: this.state.password }),
        }
        //console.log('passou aqui tmb')
        fetch(api_url+'login', requestOptions)
            .then(response => response.json())
            .then(data => { 
                if(data.login == true) {
                    this.setState({ txtLog: "Conta encontrada, bem-vindo!", color: 'green' })
                    //console.log('login feito')
                    this.setState({ login: true })
                    this.mandarLogin()
                    //window.location.href = 'Catalog.js'
                    //navigation.navigate('HomeScreen')
                } else {
                    //console.log('erraste primo')
                    this.setState({ txtLog: "Email ou password incorretos!", color: 'red' })
                } 
            })
    }

    render() {
        return (
            <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                <StatusBar style={lightMode ? 'dark' : 'light'} backgroundColor="white" />
                <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require("../../assets/imageBackground.png")}>
                    <View style={ LoginStyle.topPart } ></View>
                    <View style={ LoginStyle.middlePart } >
                        <View style={{ flex: 1 }} >
                            <Text style={ LoginStyle.title }>PocketShop</Text>
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
                                <Text style={{ marginTop: 40, color: this.state.color }} >{ this.state.txtLog }</Text>
                        </View>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', marginBottom: 20 }} >
                            <TouchableOpacity style={ LoginStyle.button } activeOpacity={.6} onPress={() => this.login()} >
                                <Text style={{ fontSize: 19 }} >Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 10 }} activeOpacity={.4} onPress={() => Linking.openURL("http://jf-api.epizy.com/")} >
                                <Text style={{ color: '#1520A6' }} >Esqueci-me da password</Text>
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