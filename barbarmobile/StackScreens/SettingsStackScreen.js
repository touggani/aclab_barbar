import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Setting from "../screens/Settings"

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Log" component={Setting}/>
      <SettingsStack.Screen name="Home" component={Home}/>
    </SettingsStack.Navigator>
  );
}