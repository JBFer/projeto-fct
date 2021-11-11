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

import Filter from './Filter' 

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
    state = {
        lightMode: true,
        isEnabled: false,
        showModal: false
    }

    
    switchToggler = () => {
        this.state.isEnabled === false ? this.setState({ isEnabled: true }) : this.setState({ isEnabled: false });
        this.state.lightMode === true ? this.setState({ lightMode: false }) : this.setState({ lightMode: true });
    };
    render() {
        return (
        <View style={ { flex: 1, backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark } }>
            <Filter themeMode={this.state.lightMode} isVisible={this.state.showModal} onCancel={() => { this.setState({ showModal: false }) }}/>
                <ScrollView decelerationRate={0.9} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                    <StatusBar style={this.state.lightMode ? 'dark' : 'light'} />
                    <View style={ CatalogStyle.headerPart }>
                        <TouchableOpacity onPress={() => { this.setState({ showModal: true }) }}>
                            <Icon2 name='filter' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco}} />
                        </TouchableOpacity>
                        <Switch
                            trackColor={{ false: "#767577", true: "#00C0F9" }}
                            thumbColor={this.state.isEnabled ? "#04d9ff" : "#f4f3f4"}
                            onValueChange={this.switchToggler}
                            value={this.state.isEnabled}
                        />
                    </View>
                    
                    <View style={ CatalogStyle.topPart }>
                        <TextInput style={ [CatalogStyle.input, { color: this.state.lightMode ? Theme.preto : Theme.branco , borderBottomColor: this.state.lightMode ? Theme.preto : Theme.branco } ]} />
                        <TouchableOpacity activeOpacity={0.4}>
                            <Icon2 name='search' size={25} style={{ color: this.state.lightMode ? Theme.preto : Theme.branco,  paddingLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                    <View style={ CatalogStyle.specs }>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>NOME DA EMPRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco }}>Ver mais...</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={ CatalogStyle.row }>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} decelerationRate={0.88} overScrollMode={'never'} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' , backgroundColor: this.state.lightMode ? Theme.branco : Theme.backDark }}>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <View>
                                    <Text style={[ CatalogStyle.Txt ,{ color: this.state.lightMode ? Theme.preto : Theme.branco }]}>Produto3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={[ CatalogStyle.eachProduct, { borderColor: this.state.lightMode ? Theme.preto : Theme.branco } ]}>
                                <Text style={{ color: this.state.lightMode ? Theme.preto : Theme.branco, fontSize: 25, marginBottom: 17 }}>...</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
        </ScrollView>
            
            
                
        </View>
            )
    }
}
