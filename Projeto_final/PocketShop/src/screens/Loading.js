import React from 'react'
import {Text,
        View,
        StyleSheet,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput
} from 'react-native'

import Theme from '../styles/Comum' 

export default class Loading extends React.Component {
    render() {
        return(
        <Modal visible={false} animationType='fade'>
            <View style={ { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' } }>
                <Text>djchvaeufdvsferfyvhuuhi</Text>
            </View>
        </Modal>
    )
    }
}
