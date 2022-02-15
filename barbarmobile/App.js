import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStackScreen from './StackScreens/MainStackScreen';
import NoStackScreen from './NoStackScreen/NoStack';
import ListBarStackScreen from './StackScreens/ListBarStackScreen';

const Stack = createNativeStackNavigator();

const isLoggedIn = 0;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       {isLoggedIn ? 
       <Stack.Screen name="Main" component={MainStackScreen}/> : <Stack.Screen name="ListBar" component={ListBarStackScreen}/>}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

