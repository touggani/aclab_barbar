import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Event from "../screens/Event"

const listBarStack = createNativeStackNavigator();

export default function EventStackScreen() {
  return (
    <listBarStack.Navigator screenOptions={{ headerShown: false }}>
      <listBarStack.Screen name="Event" component={Event}/>
    </listBarStack.Navigator>
  );
}