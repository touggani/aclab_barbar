import * as React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Log from "../screens/Log"


const NoStackScreenStack = createNativeStackNavigator();


export default function NoStackScreen() {
  return (
    <NoStackScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <NoStackScreenStack.Screen name="Log" component={Log}/>
    </NoStackScreenStack.Navigator>
  );
}

