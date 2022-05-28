import React from 'react';

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

