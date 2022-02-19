import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import {getBdeList, getLoggedUser, login} from "../service/api_service";
import authContext from "../context/authContext";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import {showMessage} from "react-native-flash-message";

export default function LogInForm({closeTab}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setLogged, setToken} = useContext(authContext)

    const log = async () => {
        const response = await login(username, password)
        if (response.status === 200) {
            const data = await response.json()
            setToken(data.token)
            setLogged(true)
        }
        else {
            closeTab()
            showMessage({
                message: "Connexion échouée",
                description: "Veuillez vérifier vos identifiants.",
                type: "default",
                backgroundColor: "#E98B8B", // background color
                color: "#ffffff", // text color
                style: { paddingTop: 60 }
            });
        }
    }

    return (

        <View style={styles.Login}>
            <Text style={styles.title}>Connexion</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Pseudo"
                    placeholderTextColor="rgba(255,255,255,0.6)"
                />
                <TextInput
                    style={[styles.input, {marginTop: 40}]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    placeholderTextColor="rgba(255,255,255,0.6)"
                />
                <Pressable onPress={log} style={styles.button}>
                    <Text style={styles.text}>Valider</Text>
                </Pressable>
            </View>
        </View>


    );
}


const styles = StyleSheet.create({
    Login: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: "white",
        marginTop: 20
    },
    form: {
        width: "90%",
        alignItems: 'center',
        top: 20,
    },
    input: {
        width: "90%",
        fontSize: 18,
        paddingBottom: 5,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        color: "white"
    },
    button: {
        width: "70%",
        backgroundColor: '#962929',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 40
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
});
