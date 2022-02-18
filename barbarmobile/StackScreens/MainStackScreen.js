import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from "./HomeStackScreen"
import ListBarStackScreen from "./ListBarStackScreen"
import SettingsStackScreen from "./SettingsStackScreen"
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {useState} from "react";

const Tab = createBottomTabNavigator();

const isLoggedIn = 0;

export default function MainStackScreen() {
    const activeColor = '#962929'

    const [route, setRoute] = useState('bars')

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                listeners={{
                    tabPress: (e) => {
                        setRoute('bars');
                    },
                }}
                name="Bars"
                component={ListBarStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcon name="glass-mug-variant" color={route === 'bars' ? activeColor : 'black'} size={size}/>
                    )

                }}
            />

            <Tab.Screen
                listeners={{
                    tabPress: (e) => {
                        setRoute('main');
                    },
                }}
                name="main"
                component={HomeStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcon name="home" color={route === 'main' ? activeColor : 'black'} size={size}/>
                    )
                }}
            />

            <Tab.Screen
                listeners={{
                    tabPress: (e) => {
                        setRoute('settings');
                    },
                }}
                name="Setting"
                component={SettingsStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcon name="account" color={route === 'settings' ? activeColor : 'black'} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

