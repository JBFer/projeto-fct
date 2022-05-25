import React from 'react'
import {Text,
        View,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput,
		Alert,
		Dimensions
} from 'react-native'

import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { api_url } from '../constants/host';

export default class AddAddress extends React.Component {
	state = {
		nome: '',
		morada: ''
	}

	submit = () => {
		if( this.state.nome != '' && this.state.morada != '' ){
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: this.state.nome, address: this.state.morada, type: 'entrega' }),
			}
			fetch(api_url+'user/addmorada', requestOptions)
				.then(response => response.json())
				.then(data => { 
					this.setState({ nome: '', morada: '' })
					Alert.alert('Morada Adicionada', 'A morada ' + this.state.morada + ' com o nome ' + this.state.nome + ' foi adicionada com sucesso.' )
					this.props.onSubmit()
				})
		} else {
			Alert.alert('Erro ao submeter', 'Preenchimento de campos obrigatório!' )
		}
		
	}

	cancel = () => {
		this.setState({ nome: '', morada: '' })
		this.props.onCancel()
	}

    render() {
        return(
			<Modal visible={this.props.isVisible} animationType='slide' transparent onRequestClose={() => { this.cancel() }}>
				<View style={ { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.themeMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(38, 38, 38, 0.5)' } }>
					<View style={ { maxHeight: 600, minHeight: 500, width: '80%', backgroundColor: this.props.themeMode ? '#C4C4C4' : '#33333a', borderWidth: 1, borderRadius: 10, elevation: 6 } }>
						<TouchableOpacity onPress={() => { this.cancel() }}>
							<Icon3 name='arrow-left' size={23} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, marginTop: 5, marginLeft: 7 }} />
						</TouchableOpacity>
						<View style={{ flex: 1, justifyContent: 'space-evenly' }} >
							<Text style={{ fontSize: 22, textAlign: 'center', color: this.props.themeMode ? Theme.preto : Theme.branco }} >Adicionar Morada</Text>
							<View style={{ width: '100%', height: '70%', alignItems: 'center', justifyContent: 'space-evenly' }}>
								<View style={{ width: '80%' }}>
									<Text style={{ fontSize: 17, color: this.props.themeMode ? Theme.preto : Theme.branco, marginBottom: 5 }}>Nome:</Text>
									<TextInput 
										style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, borderBottomColor: this.props.themeMode ? Theme.preto : Theme.branco, width: '100%', height: 30, borderBottomWidth: 1, fontSize: 17 }}
										placeholder='Insira o nome...'
										placeholderTextColor={this.state.lightMode ? '#7d868f' : '#babfc4'}
										value={this.state.nome}
										onChangeText={txt => this.setState({ nome: txt })}
									/>
								</View>
								<View style={{ width: '80%', maxHeight: '50%' }}>
									<Text style={{ fontSize: 17, color: this.props.themeMode ? Theme.preto : Theme.branco, marginBottom: 5 }}>Morada:</Text>
									<TextInput 
										style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, width: '100%', maxHeight: '100%', fontSize: 17, borderRadius: 10, textAlignVertical: 'top', padding: 5, borderLeftWidth: 1, borderRightWidth: 1, borderColor: this.props.themeMode ? Theme.preto : Theme.branco }}
										placeholder='Insira a morada...'
										multiline={true}
										numberOfLines={5}
										placeholderTextColor={this.state.lightMode ? '#7d868f' : '#babfc4'}
										value={this.state.morada}
										onChangeText={txt => this.setState({ morada: txt })}
									/>
								</View>
							</View>
							<View style={{ height: '30%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
								<TouchableOpacity style={{ width: '80%', height: 40, borderRadius: 15, borderColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 10, marginBottom: 5 }} onPress={() => this.submit()} activeOpacity={0.7} >
									<Text style={{ fontSize: 16, color: this.props.themeMode ? Theme.preto : Theme.branco }} >Submeter</Text>
								</TouchableOpacity>
								<Text style={{ fontSize: 10, color: this.props.themeMode ? Theme.preto : Theme.branco, textAlign: 'center' }}>Por causas legais o tipo de morada está predefinido{"\n"} para entrega, para mais informações contacte a equipa de desenvolvimento</Text>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		)
    }
}