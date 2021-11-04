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
import CatalogStyle from '../styles/CatalogStyle' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default function App() {
    const [lightMode, setlightMode] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false)
    
    const switchToggler = () => {
        isEnabled === false ? setIsEnabled(true) : setIsEnabled(false);
        lightMode === true ? setlightMode(false) : setlightMode(true);
    };
    
    return (
        <View style={ { flex: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark, flexDirection: 'column' } }>

                <ScrollView decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                    <StatusBar style={lightMode ? 'dark' : 'light'} />
                    <Switch
                        style={[ { marginTop: 30 } , { backgroundColor: lightMode ? Theme.branco : Theme.backDark }]}
                        trackColor={{ false: "#767577", true: "#00C0F9" }}
                        thumbColor={isEnabled ? "#04d9ff" : "#f4f3f4"}
                        onValueChange={switchToggler}
                        value={isEnabled}
                    />
                    <View style={ CatalogStyle.topPart }>
                        <TextInput style={ [CatalogStyle.input, { color: lightMode ? Theme.preto : Theme.branco , borderBottomColor: lightMode ? Theme.preto : Theme.branco } ]} />
                        <TouchableOpacity>
                            <Icon2 name='search' size={25} style={{ color: lightMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
        </ScrollView>
            
            
                
        </View>
  );
}
