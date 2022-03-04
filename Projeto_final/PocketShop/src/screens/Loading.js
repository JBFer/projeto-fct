import React from 'react'
import {Text,
        View,
        Image,
} from 'react-native'

import Theme from '../styles/Comum' 



export default class Loading extends React.Component {
    render() {
        return(
        <View style={ { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' } }>
            <Image style={{ width: 200, height: 200 }} source={require('../../assets/loadingGif.gif')} />
            <Text style={{ fontSize: 25 }}>Loading...</Text>
        </View> 
    )
    }
}
