import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListEvent from "../screens/ListEvent"

const listEventStack = createNativeStackNavigator();

export default function ListEventStackScreen() {
  return (
    <listEventStack.Navigator screenOptions={{ headerShown: false }}>
      <listEventStack.Screen name="ListEvent" component={ListEvent}/>
    </listEventStack.Navigator>
  );
}