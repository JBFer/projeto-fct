import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Navigation/Routes';

function App() {

    return(
        
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
    
}

export default App;

