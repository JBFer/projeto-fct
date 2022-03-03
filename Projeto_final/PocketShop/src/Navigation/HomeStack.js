import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import ProductDetails from "../screens/ProductDetails";
import Home from "../screens/Home";
import Login from "../screens/Login";

import Theme from '../styles/Comum' 

import HomeScreen from './NestedNavigation'
import { api_url } from "../constants/host";


export default function HomeStack(Stack) {
    return (
        <Stack.Group >
            <Stack.Screen name='Main' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Definicoes' component={Settings} 
                options={{ 
                    title: '',
                    headerStyle: {
                        backgroundColor: Theme.backDark,
                    },
                    headerTintColor: '#fff',
                    
                }} 
            />
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
        </Stack.Group>
    

    )
}
