import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Theme from '../styles/Comum' 
import HomeStyle from '../styles/HomeStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { lightMode } from '../constants/global'

export default function App({ navigation }) {
    
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
            <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                <StatusBar style={lightMode ? 'dark' : 'light'} />
                <View style={ HomeStyle.topPart }>
                    <TouchableOpacity onPress={() => navigation.navigate('Definicoes')} onThemeChange={() => {}}>
                        <Icon3 name='cog' color={ lightMode ? Theme.preto : Theme.branco } size={38} />
                    </TouchableOpacity>
                </View>
                <View style={ HomeStyle.titlePart }>
                    <Text style={[ HomeStyle.welcome, { color: lightMode ? Theme.preto : Theme.branco } ]}>Bem vindo,                 BigLevel</Text>
                </View>

                <View style={ HomeStyle.middlePart }>
                    <View style={ HomeStyle.alinhar }>
                        <Text style={[ HomeStyle.subtitle, { color: lightMode ? Theme.preto : Theme.branco } ] }>Produtos em alta </Text>
                        <Icon name='fire-alt' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco}} />
                    </View>
                    
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end'}}>
                            <TouchableOpacity activeOpacity={0.6} style={[ HomeStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ HomeStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ HomeStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ HomeStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ HomeStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ HomeStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ HomeStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                </View>
                <View style={ HomeStyle.downPart }>
                    <View style={ HomeStyle.alinhar }>
                        <Text style={[ HomeStyle.subtitle, { color: lightMode ? Theme.preto : Theme.branco } ] }>As minhas vendas </Text>
                        <Icon3 name='bar-chart' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco, marginTop: 5}} />
                    </View>
                    <View style={[ HomeStyle.fakeGraph, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                        <View style={[ HomeStyle.eachPart, { backgroundColor: lightMode ? Theme.preto : Theme.branco } ]}></View>
                        <View style={[ HomeStyle.eachPart, { backgroundColor: lightMode ? Theme.preto : Theme.branco, height: 80 } ]}></View>
                        <View style={[ HomeStyle.eachPart, { backgroundColor: lightMode ? Theme.preto : Theme.branco, height: 20 } ]}></View>
                        <View style={[ HomeStyle.eachPart, { backgroundColor: lightMode ? Theme.preto : Theme.branco, height: 120 } ]}></View>
                    </View>
                </View>
            </View>
        </ScrollView>
  );
}
