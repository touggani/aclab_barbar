import React, {useEffect, useRef, useState} from 'react'
import {StyleSheet, Text, View, Pressable, Image, Button, TextInput} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {api_address, getBdeList, registration} from "../service/api_service";
import {save} from "../service/storage";

export default function SignInForm() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [step, setStep] = useState(0);
    const [pseudo, setPseudo] = useState("")
    const [mailAddress, setMailAddress] = useState("")
    const [mailError, setMailError] = useState(false)
    const [password, setPassword] = useState("")
    const [bde, setBde] = useState("")
    const [bdeList, setBdeList] = useState([])

    useEffect(() => {
        loadBdeData().then((data) => {
            setBdeList(data)
        })
    }, [])

    const loadBdeData = async () => {
        const response = await getBdeList()
        if (response.status === 200) {
            const data = await response.json()
            return data["hydra:member"]
        }
        return []
    }

    const customList = () => {
        let list = []

        bdeList.map(bde => {
            list.push({
                label: bde.name,
                value: bde.id
            })
        })

        return list
    }

    const validateMail = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(mailAddress) === false) {
            return false
        }
        return true
    }

    const registrate = async () => {
        const response = await registration({
            'username': pseudo,
            'mailAddress': mailAddress,
            'password': password,
            'bde': bde
        })

        console.log('status', response.status)

        if (response.status === 201) {
            setSuccess('Vous avez bien été enregistré !')
        }
        else {
            setError('Il y a eu une error lors de l\'inscription.')
        }
    }

    return (
        <View style={styles.Login}>
            { error !== ''&& <Text>{error}</Text> }
            { success !== '' && <Text>{success}</Text> }
            <Text style={styles.title}>{step === 0 ? 'Informations générales' : 'Choix du BDE'}</Text>
            <View style={styles.form}>
                {step === 0 ?
                    <View style={{width: "100%", alignItems: "center"}}>
                        <TextInput
                            style={[styles.input]}
                            value={pseudo}
                            onChangeText={setPseudo}
                            placeholder="Pseudo"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                        />
                        <TextInput
                            style={[!mailError ? styles.input : styles.errorInput, {marginTop: 25}]}
                            value={mailAddress}
                            onChangeText={setMailAddress}
                            placeholder="Adresse mail"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            onBlur={() => {
                                !validateMail() ? setMailError(true) : setMailError(false)
                            }}
                        />
                        <TextInput
                            style={[styles.input, {marginTop: 25}]}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Mot de passe"
                            placeholderTextColor="rgba(255,255,255,0.6)"
                            secureTextEntry={true}
                        />
                        { pseudo !== '' && mailAddress !== '' && password !== '' && validateMail() &&
                            <Pressable style={styles.nextButton} onPress={() => setStep(1)}>
                                <Text style={styles.nextText}>Suivant</Text>
                            </Pressable>
                        }
                    </View> :
                    <View style={{width: "100%", alignItems: "center"}}>
                        <RNPickerSelect
                            style={selectStyle}
                            onValueChange={(value) => setBde(value)}
                            placeholder={{}}
                            items={customList()}
                            value={bde}
                        />
                        <Pressable style={styles.button} onPress={registrate}>
                            <Text style={styles.text}>Valider</Text>
                        </Pressable>

                        <Pressable style={styles.nextButton} onPress={() => setStep(0)}>
                            <Text style={styles.beforeText}>Retour</Text>
                        </Pressable>
                    </View>}

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
    errorInput: {
        width: "90%",
        fontSize: 18,
        paddingBottom: 5,
        borderBottomWidth: 1,
        color: "white",
        borderBottomColor: '#D11D1D'
    },
    button: {
        width: "70%",
        backgroundColor: '#962929',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 30
    },
    nextButton: {
        marginTop: 30,
        width: '90%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    nextText: {
        fontSize: 20,
        alignSelf: 'flex-end',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        fontStyle: 'italic'
    },
    beforeText: {
        fontSize: 20,
        alignSelf: 'flex-start',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        fontStyle: 'italic'
    },
});

const selectStyle = {
    placeholder: {
        color: 'white'
    }
}
