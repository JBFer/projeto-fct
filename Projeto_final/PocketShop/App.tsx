import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Navigation/Routes'
import Catalog from './src/screens/Catalog';


function App() {
    
    return(
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}

export default App;

