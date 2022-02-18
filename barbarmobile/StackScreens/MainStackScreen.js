import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from "./HomeStackScreen"
import EventStackScreen from "./EventStackScreen"
import SettingsStackScreen from "./SettingsStackScreen"
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {useContext, useEffect, useState} from "react";
import BdeStackScreen from "./BdeStackScreen";
import jwtDecode from "jwt-decode";
import {getLoggedUser} from "../service/api_service";
import authContext from "../context/authContext";

const Tab = createBottomTabNavigator();

const isLoggedIn = 0;

export default function MainStackScreen() {
    const activeColor = '#962929'

    const [route, setRoute] = useState('main')

    const {token, setUser} = useContext(authContext)

    useEffect(() => {
        saveUser().then(user => {
            console.log(user)
            setUser(user)
        })
    }, [])

    const saveUser = async () => {
        const {id} = jwtDecode(token)
        const response = await getLoggedUser(id)
        if (response.status === 200) {
            return await response.json()
        }
    }

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
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
                        <MaterialCommunityIcon name="glass-mug-variant" color={route === 'main' ? activeColor : 'black'} size={size}/>
                    )
                }}
            />

            <Tab.Screen
                listeners={{
                    tabPress: (e) => {
                        setRoute('bde');
                    },
                }}
                name="bde"
                component={BdeStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcon name="account-group" color={route === 'bde' ? activeColor : 'black'} size={size}/>
                    )
                }}
            />

            <Tab.Screen
                listeners={{
                    tabPress: (e) => {
                        setRoute('events');
                    },
                }}
                name="events"
                component={EventStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcon name="calendar-star" color={route === 'events' ? activeColor : 'black'} size={size}/>
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

