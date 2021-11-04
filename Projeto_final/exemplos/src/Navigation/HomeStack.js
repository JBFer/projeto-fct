import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

import Theme from '../styles/Comum' 

import HomeScreen from './NestedNavigation'


export default function HomeStack(Stack) {
    return (
        <Stack.Group >
            <Stack.Screen name='Definicoes' component={Settings} 
                options={{ 
                    title: 'Definições',
                    headerStyle: {
                        backgroundColor: Theme.backDark,
                    },
                    headerTintColor: '#fff',
                    
                }} 
            />
            <Stack.Screen name='Main' component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Group>
    );
}