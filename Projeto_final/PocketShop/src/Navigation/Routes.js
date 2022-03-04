import React, { useState, useEffect } from 'react';

import HomeStack from './HomeStack'
import Login from '../screens/Login'

import { api_url } from '../constants/host';
import Loading from '../screens/Loading';


export default function Routes() {
    const [logged, setlogged] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2500)
        fetch(api_url+'verifylogin')
            .then(response => response.json())
            .then(data => setlogged(data.login))
    }, []);

    const login = (login_status) => {
        console.log('BING BONG FUCKKKKKKKKKKKKKK')
        setlogged(login_status)
    }

    if (logged == true){
        return(
            <HomeStack is_logged={(login_status) => login(login_status)} />
        )
    } else {
        if (loading == true) {
            return <Loading/>
        } else {
            return <Login is_logged={(login_status) => login(login_status)}/>
        }
    }
}