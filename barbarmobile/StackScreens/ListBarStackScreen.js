import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListBar from "../screens/ListBar"

const listBarStack = createNativeStackNavigator();

export default function ListBarStackScreen() {
  return (
    <listBarStack.Navigator screenOptions={{ headerShown: false }}>
      <listBarStack.Screen name="ListBar" component={ListBar}/>
    </listBarStack.Navigator>
  );
}