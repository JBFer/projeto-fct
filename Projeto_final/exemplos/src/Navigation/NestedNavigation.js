import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Catalog from '../screens/Catalog';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator()

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default function HomeScreen() {
    return(
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#000' }
            }}
        >
            
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                  tabBarLabel: 'Página Inicial',
                  tabBarIcon: ({ focused }) => (
                    <Icon2 name="home" color={focused ? 'white' : 'gray'} size={25} />
                  ),
                }}
            />
            
            
            <Tab.Screen 
                name="Catalogo" 
                component={Catalog}
                options={{
                  tabBarLabel: 'Catalogo',
                  tabBarIcon: ({ focused }) => (
                    <Icon2 name="search" color={focused ? 'white' : 'gray'} size={25} />
                  ),
                }}
            />
            
            
        </Tab.Navigator>
    )
}