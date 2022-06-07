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
    Linking,
    ActivityIndicator
} from 'react-native';

import Theme from '../styles/Comum' 
import LoginStyle from '../styles/LoginStyle' 

import myGlobals from '../constants/global'
import { api_url } from '../constants/host';

export default class Login extends React.Component {
    state = {
        email: "",
		password: "",
        login: false,
        txtLog: "",
        color: 'red',
        isLogging: false
    }

    mandarLogin = () => {
		const login_status = true
        //console.log(login_status)
		this.props.is_logged(login_status)
	}

    user_email = txt_email => {
		this.setState({ email: txt_email.toLowerCase().trim() })
	}

    user_pass = txt_pass => {
		this.setState({ password: txt_pass })
	}

    login = () => {
        //login process
        this.setState({ txtLog: "", isLogging: true })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, pass: this.state.password }),
        }
        fetch(api_url+'login', requestOptions)
            .then(response => response.json())
            .then(data => { 
                if(data.login == true) {
                    this.setState({ txtLog: "Conta encontrada, bem-vindo!", color: 'green', login: true, isLogging: false })
                    this.mandarLogin()
                } else {
                    //console.log('user cant login')
                    this.setState({ txtLog: "Email ou password incorretos!", color: 'red', isLogging: false })
                } 
            })
    }

    render() {
        return (
            <View style={ { flex: 1, backgroundColor: myGlobals.lightMode ? Theme.branco : Theme.backDark } }>
                <StatusBar style={myGlobals.lightMode ? 'dark' : 'light'} backgroundColor="white" />
                <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={require("../../assets/imageBackground.png")}>
                    <View style={ LoginStyle.topPart } ></View>
                    <View style={ LoginStyle.middlePart } >
                        <View style={{ width: '100%', height: '20%' }} >
                            <Text style={ LoginStyle.title }>PocketShop</Text>
                        </View>
                        <View style={{ width: '100%', height: '35%', alignItems: 'center', justifyContent: 'flex-end' }} >
                            <TextInput
                                autoCompleteType='email'
                                placeholder='Email'
                                placeholderTextColor={"#474d53"} 
                                style={[ LoginStyle.textBox, { marginBottom: 50 } ]}
                                value={this.state.searchTxt}
                                autoCapitalize="none"
								onChangeText={txt_email => this.user_email(txt_email)}
                            />
                            <TextInput 
                                autoCompleteType='password'
                                placeholder='Password'
                                placeholderTextColor={"#474d53"}
                                secureTextEntry={true}
                                style={ LoginStyle.textBox }
                                value={this.state.searchTxt}
								onChangeText={txt_pass => this.user_pass(txt_pass)}
                            />
                        </View>
                        <View style={{ width: '100%', height: '13%', justifyContent: 'flex-end', alignItems: 'center' }} >
                            { this.state.isLogging ?
                                <ActivityIndicator size={30} color="#0000ff" />
                                :
                                <Text style={{ color: this.state.color }} >{ this.state.txtLog }</Text>
                            }
                        </View>
                        <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'space-evenly' }} >
                            <TouchableOpacity style={ LoginStyle.button } activeOpacity={.6} onPress={() => this.login()} >
                                <Text style={{ fontSize: 19 }} >Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.4} onPress={() => Linking.openURL("http://jf-api.epizy.com/")} >
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