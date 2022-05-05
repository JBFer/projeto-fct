import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from "./src/services/store/store";


function App() {

    return(
        <Provider store={store}>
            <NavigationContainer>
                <Routes/>
            </NavigationContainer>
        </Provider>
    )
    
}

export default App;

