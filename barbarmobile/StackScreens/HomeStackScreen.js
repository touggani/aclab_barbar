import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Bar from "../screens/Bar";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="Bar" component={Bar} options={{ title: 'Retour à la liste' }}/>
        </HomeStack.Navigator>
    );
}