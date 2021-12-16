import React, { useState } from 'react'
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
	const [mode, setMode] = useState(true);
	return (
		<Modal visible={props.isVisible} transparent={true} animationType='slide'>
			<View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: props.themeMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(38, 38, 38, 0.5)' }} >
				<View style={[ styles.modal, { backgroundColor: props.themeMode ? Theme.branco : Theme.backDark, borderColor: props.themeMode ? '#D3D3D3' : '#000', }]}>
					<View style={ styles.topPart }>
						<View style={ styles.topTopPart }>
							<Text style={{ marginRight: 10, marginTop: 5, fontSize: 15, color: props.themeMode ? Theme.preto : Theme.branco  }}>{props.data}</Text>
							<TouchableOpacity
								onPress={() => (
									setMode(true),
									props.onCancel()
								)} 
								activeOpacity={0.4}
							>
								<Text style={{ marginTop: 5, fontSize: 15, color: props.themeMode ? Theme.preto : Theme.branco  }}>Voltar</Text>
							</TouchableOpacity>
						</View>
						<Text style={{ marginLeft: 5, fontSize: 22, borderBottomWidth: 1, paddingBottom: 8, width: '90%', color: props.themeMode ? Theme.preto : Theme.branco, borderColor: props.themeMode ? Theme.preto : Theme.branco   }} >Encomenda Nº{props.numEnc}</Text>
					</View>
					<View style={ styles.middlePart }>
						<View style={ styles.middleTopPart }>
							<TouchableOpacity activeOpacity={0.4} onPress={() => setMode(true)} style={{ width: '40%', height: 35, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5 , borderTopRightRadius: 5, borderTopWidth: mode ? 1 : 0, borderLeftWidth: mode ? 1 : 0, borderRightWidth: mode ? 1 : 0, borderBottomWidth: mode ? 2 : 0, borderBottomColor: mode ? 'white' : 'black', marginBottom: -1, borderLeftColor: Theme.backDark, borderTopColor: Theme.backDark, borderRightColor: Theme.backDark }}>
								<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco  }}>{props.info.length} Produtos</Text>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={0.4} onPress={() => setMode(false)} style={{ width: '40%', height: 35, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5 , borderTopRightRadius: 5 , borderTopRightRadius: 5, borderTopWidth: mode ? 0 : 1, borderLeftWidth: mode ? 0 : 1, borderRightWidth: mode ? 0 : 1, borderBottomWidth: mode ? 0 : 2, borderBottomColor: mode ? 'black' : 'white', marginBottom: -1, borderLeftColor: Theme.backDark, borderTopColor: Theme.backDark, borderRightColor: Theme.backDark }}>
								<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco  }}>Detalhes</Text>
							</TouchableOpacity>
						</View>
						{ mode ?
							<FlatList
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								data={props.info}
								renderItem={({item}) => <ProdEnc name={item.name} price={item.price} qnt={item.qnt} idProd={item.idProd} />}
								keyExtractor={item => item.idProd}
					 		/>
						:
							<View style={{ flex: 1, marginTop: 20 }}>
								<View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#D3D3D3', height: 100 }}>
									<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco , marginRight: 10 }}>Contribuinte:</Text>
									<Text style={{ fontSize: 16, color: props.themeMode ? Theme.preto : Theme.branco }}>{props.cont}</Text>
								</View>
								<View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#D3D3D3', height: 100 }}>
									<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco }}>Morada de faturação:</Text>
									<Text style={{ fontSize: 16, color: props.themeMode ? Theme.preto : Theme.branco }}>{props.moradaFaturacao}</Text>
								</View>
								<View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 100 }}>
									<Text style={{ fontSize: 17, color: props.themeMode ? Theme.preto : Theme.branco }}>Morada de entrega:</Text>
									<Text style={{ fontSize: 16, color: props.themeMode ? Theme.preto : Theme.branco }}>{props.moradaEntrega}</Text>
								</View>
								
							</View>
						}
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
		overflow: 'hidden',
	},
	middleTopPart: {
		//backgroundColor: 'orange',
		borderBottomWidth: 1,
		borderBottomColor: Theme.backDark,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	downPart: {
		flexDirection: 'row',
		paddingTop: 5,
		paddingBottom: 7,
		justifyContent: 'space-between',
		//backgroundColor: 'green'
	}
})
