import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './HomeStack'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator>
            {HomeStack(Stack)}
        </Stack.Navigator>
    )
}