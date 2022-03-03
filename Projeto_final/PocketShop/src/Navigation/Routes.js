import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './HomeStack'
import Login from '../screens/Login'

import { api_url } from '../constants/host';

const Stack = createNativeStackNavigator()

export default function Routes() {
    const [logged, setlogged] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(api_url+'verifylogin')
            .then(response => response.json())
            .then(data => setlogged(data.login), setloading(false));

    }, []);

    const login = (login_status) => {
        console.log('BING BONG FUCKKKKKKKKKKKKKK')
        setlogged(login_status)
    }

    if (logged == true){
        return(
            <Stack.Navigator>
                {HomeStack(Stack)}
            </Stack.Navigator>
        )
    } else {
        return <Login showModal={loading} is_logged={(login_status) => login(login_status)}/>
    }
}