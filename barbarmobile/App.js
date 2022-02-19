import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackScreen from './StackScreens/MainStackScreen';
import NoStackScreen from './NoStackScreen/NoStack';
import {useState} from "react";
import AuthContext from "./context/authContext";
import {StatusBar} from "react-native";
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
    const [logged, setLogged] = useState(false)
    const [token, setToken] = useState(false)
    const [user, setUser] = useState(null)

    const authContextValue = {
        logged,
        setLogged,
        token,
        setToken,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {
                        logged ?
                            <Stack.Screen name="Main" component={MainStackScreen}/>
                            :
                            <Stack.Screen name="Main" component={NoStackScreen}/>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

