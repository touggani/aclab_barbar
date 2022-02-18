import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Event from "../screens/Event"
import Bde from "../screens/Bde";

const listBarStack = createNativeStackNavigator();

export default function BdeStackScreen() {
  return (
    <listBarStack.Navigator screenOptions={{ headerShown: false }}>
      <listBarStack.Screen name="Bde" component={Bde}/>
    </listBarStack.Navigator>
  );
}