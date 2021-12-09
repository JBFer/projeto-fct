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

import ProdEnc from '../components/ProdEnc'

export default props => {
	return (
		<Modal visible={props.isVisible} transparent={true} animationType='slide'>
			<View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: props.themeMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(38, 38, 38, 0.5)' }} >
				<View style={[ styles.modal, { backgroundColor: props.themeMode ? Theme.branco : Theme.backDark, borderColor: props.themeMode ? '#D3D3D3' : '#000', }]}>
					<View style={ styles.topPart }>
						<View style={ styles.topTopPart }>
							<Text style={{ marginRight: 10, marginTop: 5, fontSize: 15, color: props.themeMode ? Theme.preto : Theme.branco  }}>{props.data}</Text>
							<TouchableOpacity onPress={() => props.onCancel()} activeOpacity={0.4}>
								<Text style={{ marginTop: 5, fontSize: 15, color: props.themeMode ? Theme.preto : Theme.branco  }}>Voltar</Text>
							</TouchableOpacity>
						</View>
						<Text style={{ marginLeft: 5, fontSize: 22, borderBottomWidth: 1, paddingBottom: 8, width: '90%', color: props.themeMode ? Theme.preto : Theme.branco, borderColor: props.themeMode ? Theme.preto : Theme.branco   }} >Encomenda Nº{props.numEnc}</Text>
					</View>
					<View style={ styles.middlePart }>
						<FlatList
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							data={props.info}
							ListHeaderComponent={() => (
								<View style={ styles.middleTopPart }>
									<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco  }}>Produtos</Text>
								</View>
							)}
							renderItem={({item}) => <ProdEnc name={item.name} price={item.price} qnt={item.qnt} idProd={item.idProd} />}
							keyExtractor={item => item.idProd}
					 	/>
					</View>
					<View style={ styles.downPart }>
						<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco  }} >Total:</Text>
						<Text style={{ fontSize: 16, color: props.themeMode ? Theme.preto : Theme.branco  }} >{props.precoTt}€</Text>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modal: {
		overflow: 'hidden',
		height: '70%',
		width: '80%',
		borderWidth: 1,
		borderRadius: 10,
		elevation: 6,
		paddingLeft: 5,
		paddingRight: 5
	},
	topPart: {
		//backgroundColor: 'red',
		flex: 1,
	},
	topTopPart: {
		//backgroundColor: 'yellow',
		height: '40%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	middlePart: {
		//backgroundColor: 'blue',
		flex: 5,
	},
	middleTopPart: {
		//backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center'
	},
	downPart: {
		flexDirection: 'row',
		paddingTop: 5,
		paddingBottom: 7,
		justifyContent: 'space-between',
		//backgroundColor: 'green'
	}
})
