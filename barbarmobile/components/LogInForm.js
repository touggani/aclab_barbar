import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import {getBdeList, login} from "../service/api_service";
import {save} from "../service/storage";
import authContext from "../context/authContext";

export default function LogInForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setLogged} = useContext(authContext)

    const log = async () => {
        const response = await login(username, password)
        if (response.status === 200) {
            const data = await response.json()
            await save('token', data.token)
            setLogged(true)
        }
        else {
            console.log(response.status)
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
