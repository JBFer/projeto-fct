import React from 'react'
import {Text,
        View,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput,
		Alert,
        ScrollView
} from 'react-native'

import Theme from '../styles/Comum' 
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import NoBuyProd from '../components/NoBuyProd'
import BuyProd from '../components/BuyProd'
import { api_url } from '../constants/host'

export default class Buy extends React.Component {    
    state = {
        each:[],
        total: 0
    }

    cancel = () => {
        this.setState({ total: 0 })
        this.props.onCancel()
    }

    getTotal = (a, b, c) => {
        let preco = this.state.total 
        //console.log('subtrai '+ (a * b) +' a ' + preco)
        //console.log('adiciona '+ (a * c) +' a ' + preco)
        preco -= a * b
        preco += a * c
        this.setState({ total: preco })
    }

    getProds = () => {
        fetch( api_url+'products/getcart')
            .then(response => response.json())
            .then(data => {
                this.setState({ each: data.list })
            })
    }

    renderEmpty = () => {
        return(
            <NoBuyProd/>
        )
    }

    renderHeader = () => {
        return(
            <View style={{ height: 50, width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: this.props.themeMode ? Theme.preto : Theme.branco, flexDirection: 'row' }} >
                <Text style={{ fontSize: 22, color: this.props.themeMode ? Theme.preto : Theme.branco }}>Carrinho</Text>
                <Icon3 name='shopping-cart' size={18} style={{ color: this.props.themeMode ? Theme.preto : Theme.branco, paddingTop: 4, paddingLeft: 10 }} />
            </View>
        )
    }

    renderFooter = () => {
        return(
            <View style={{ height: 10, width: '100%'}} ></View>
        )
    }

    renderListItem = ( item ) => {
        return(
            <BuyProd goBack={() => this.cancel()} nav={this.props.nav} id={item.item} setTotal={(a, b, c) => this.getTotal(a, b, c)}/>
        )
    } 

    keyExtractor = ( item ) => {
        return item.toString()
    }

    
    render() {
        return(
			<Modal visible={this.props.isVisible} animationType='slide' transparent onRequestClose={() => this.cancel()} onShow={() => { this.getProds() }} >
				<View style={ { flex: 1 } }>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.cancel()}/>
                    <View style={{ flex: 1, backgroundColor: this.props.themeMode ? '#C4C4C4' : '#3f3f48', borderTopLeftRadius: 25, borderTopRightRadius: 25, overflow: 'hidden', alignItems: 'center', borderTopWidth: 1 }} >
                        <FlatList
                            style={{ width: '90%' }}
                            data={this.state.each}
                            renderItem={this.renderListItem}
                            keyExtractor={this.keyExtractor}
                            ListFooterComponent={this.renderFooter}
                            ListHeaderComponent={this.renderHeader}
                            ListEmptyComponent={this.renderEmpty}
                        />
                        <View style={{ height: 55, width: '95%', borderTopWidth: 1, borderTopColor: this.props.themeMode ? Theme.preto : Theme.branco, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                            <Text style={{ fontSize: 18, color: this.props.themeMode ? Theme.preto : Theme.branco }} >Total: {this.state.total.toFixed(2)}€</Text>
                            <TouchableOpacity disabled={this.state.total ? false : true} style={{ height: 40, borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center', borderColor: '#03C04A', paddingHorizontal: 5 }} activeOpacity={0.7}>
                                <Text style={{ fontSize: 16, color: '#03C04A' }} >Encomendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
				</View>
			</Modal>
		)
    }
}
