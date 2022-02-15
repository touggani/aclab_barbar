import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from "./HomeStackScreen"
import ListBarStackScreen from "./ListBarStackScreen"
import SettingsStackScreen from "./SettingsStackScreen"

const Tab = createBottomTabNavigator();

const isLoggedIn = 0;

export default function MainStackScreen() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Bars" component={ListBarStackScreen}/>
        <Tab.Screen name="main" component={HomeStackScreen}/>
        
        <Tab.Screen name="Setting" component={SettingsStackScreen}/>
      </Tab.Navigator>
  );
}

