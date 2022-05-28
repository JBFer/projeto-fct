import React from "react";
import Settings from "../screens/Settings";
import Cart from "../screens/Cart";
import ProductDetails from "../screens/ProductDetails";
import ImageLayout from "../screens/ImageLayout";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Theme from '../styles/Comum' 

import HomeScreen from './NestedNavigation'

const Stack = createNativeStackNavigator()

export default HomeStack = props => {
    const passar = () => {
        //console.log("chega aqui amigo, agr falta passar pra cima")
        props.is_logged(false)
    }
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name='Main' component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Definicoes'
                    options={{ 
                        title: '',
                        headerStyle: {
                            backgroundColor: Theme.backDark,
                        },
                        headerTintColor: '#fff',
                        
                    }} 
                >
                    {props=><Settings passarProps={() => passar()}/>}
                </Stack.Screen>
                <Stack.Screen name='ProductDetails' component={ProductDetails} 
                    options={{ 
                        title: '',
                        headerTransparent: true,
                        headerStyle: {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        headerShadowVisible: false,
                        headerTintColor: this.lightMode ? '#fff' : '#000',
                    }}  
                />
                <Stack.Screen name='Cart' component={Cart} 
                    options={{ 
                        title: 'Encomendar',
                        headerTransparent: true,
                        headerStyle: {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        headerShadowVisible: false,
                        headerTintColor: this.lightMode ? '#fff' : '#000',
                    }}  
                />
                <Stack.Screen name='ImageLayout' component={ImageLayout} 
                    options={{ 
                        title: '',
                        headerTransparent: true,
                        headerStyle: {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        headerShadowVisible: false,
                        headerTintColor: this.lightMode ? '#fff' : '#000',
                    }}  
                />
            </Stack.Group>
        </Stack.Navigator>
    

    )
}
