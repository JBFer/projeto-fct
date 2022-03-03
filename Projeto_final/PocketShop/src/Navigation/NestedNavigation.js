import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Catalog from '../screens/Catalog';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator()

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default function HomeScreen() {

    return(
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#000', height: 60, borderTopWidth: 0, keyboardHidesTabBar: true},
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen 
                name="Catalogo" 
                component={Catalog}
                options={{
                    tabBarLabel: 'Catalogo',
                    tabBarLabelStyle: { marginBottom: 8, fontSize: 12 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: '50%', borderTopWidth: focused ? 1 : 0, borderColor: 'white', alignItems: 'center' }}>
                            <Icon2 name="search" color={focused ? 'white' : 'gray'} size={25}/>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarLabelStyle: { marginBottom: 8, fontSize: 12 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: '50%', borderTopWidth: focused ? 1 : 0, borderColor: 'white', alignItems: 'center' }}>
                            <Icon name="heart" color={focused ? 'white' : 'gray'} size={25}/>
                        </View>
                    ),
                }}
            />
            
            
            
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarLabelStyle: { marginBottom: 8, fontSize: 12 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: '50%', borderTopWidth: focused ? 1 : 0, borderColor: 'white', alignItems: 'center' }}>
                            <Icon2 name="person" color={focused ? 'white' : 'gray'} size={25}/>
                        </View>
                    ),
                }}
            />
            
            
        </Tab.Navigator>
    )
}