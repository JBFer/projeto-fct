import React from 'react'
import {Text,
        View,
        Modal,
		FlatList,
        TouchableOpacity,
        TextInput,
		Alert
} from 'react-native'

import Slider from '@react-native-community/slider';

import Theme from '../styles/Comum' 
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default class AddAdress extends React.Component {
    render() {
        return(
			<Modal visible={this.props.isVisible} animationType='slide'>
				<View style={ { flex: 1, backgroundColor: this.props.themeMode ? Theme.branco : Theme.backDark } }>
					<Text>AAA</Text>
				</View>
			</Modal>
		)
    }
}