import React from 'react'
import {Text,
        View,
        StyleSheet,
        Modal,
        TouchableOpacity,
        TextInput
} from 'react-native'

import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import FilterStyle from '../styles/FilterStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            price: 200,
            minPrice: 0,
            maxPrice: 200
        }
    }
    
    
    cancel = () => {
        this.props.onCancel()
    }
    
    render() {
        return(
        <Modal visible={this.props.isVisible} animationType='slide'>
            <View style={ { flex: 1, backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
                <View style={ FilterStyle.titlePart }>
                    <Text style={[ FilterStyle.title, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]} >Pesquisa Avançada</Text>
                </View>

                <View style={ FilterStyle.topPart }>
                    <TextInput style={ [FilterStyle.input, { color: this.props.themeMode ? Theme.preto : Theme.branco , borderBottomColor: this.props.themeMode ? Theme.preto : Theme.branco } ]} />
                    <Icon2 name='search' size={25} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
                </View>
                
                <View style={ FilterStyle.pricePart }>
                    <Text style={ [FilterStyle.secondaryTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Preço</Text>
                    <Slider
                        style={{ width: 300}}
                            step={5}
                            minimumValue={this.state.minPrice}
                            maximumValue={this.state.maxPrice}
                            value={this.state.price}
                            onValueChange={val => this.setState({ price: val })}
                            maximumTrackTintColor='#04d9ff' 
                            minimumTrackTintColor='#00C0F9'
                    />
                </View>
                <View style={ FilterStyle.rangePrice }>
                    <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{this.state.minPrice}€</Text>
                    <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{this.state.price}€</Text>
                    <Text style={{ color: this.props.themeMode ? Theme.preto : Theme.branco }}>{this.state.maxPrice}€</Text>
                </View>
                <View style={ FilterStyle.middlePart }>
                    
                </View>
                
                <View style={ FilterStyle.btnBoth }>
                    <TouchableOpacity onPress={() => { this.cancel() }} style={[ FilterStyle.btnCancel, { borderColor: this.props.themeMode ? Theme.preto : Theme.branco } ]}>
                        <Text style={[ FilterStyle.cancelTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ FilterStyle.btnSearch, { borderColor: this.props.themeMode ? Theme.preto : Theme.branco } ]}>
                        <Text style={[ FilterStyle.cancelTxt, { color: this.props.themeMode ? Theme.preto : Theme.branco } ]}>Procurar</Text>
                        <Icon2 name='search' size={23} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, paddingLeft: 4 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
    }
}
