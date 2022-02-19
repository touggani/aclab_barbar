import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image, FlatList, Pressable} from 'react-native';
import authContext from "../context/authContext";
import Top from "../components/top";
import {Title} from "react-native-paper";
import { format } from "date-fns";

export default function Setting() {
    const {user, token, setToken, setLogged} = useContext(authContext)

    useEffect(() => {
        if (!token) {
            setLogged(false)
        }
    }, [token])

    const renderParticipation = ({item}) => (
        <Participation item={item} />
    );
    const Participation = ({item}) => {
        const date = new Date(item.event.startDate)
        const formattedDate = format(date, "dd/MM à H") + 'h' + format(date, "mm")

        return (
        <View style={styles.participation}>
            <View style={styles.mainInfo}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.eventName}>{item.event.name}</Text>
                    <Text style={styles.date}>Le {formattedDate}</Text>
                </View>
                <Text style={styles.description}>{item.event.description}</Text>
            </View>
        </View>
    )}

    return (
        <View style={styles.container}>
            <Top/>
            <Title style={styles.page_title}>Profil</Title>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Image
                        style={styles.picture}
                        source={{uri: 'https://barbar-api.herokuapp.com/img/' + user.bde.logo}}
                    />
                    <View>
                        <Text style={styles.attribute}>{user.username}</Text>
                        <Text>{user.mailAddress}</Text>
                    </View>
                </View>
                <Title style={styles.subtitle}>Mes participations</Title>
                {user.participations.length > 0 ?
                    <FlatList
                        data={user.participations}
                        renderItem={renderParticipation}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                    : <Text>Vous ne participez à aucun événement.</Text>}
            </View>

            <View style={styles.logout}>
                <Pressable onPress={() => {
                    console.log('hell')
                    setToken(null)
                }}>
                    <Text style={styles.logoutText}>Déconnexion</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        textAlign: 'center',
    },
    page_title: {
        marginTop: 130,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    content: {
        padding: 20
    },
    row: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    attribute: {
        fontWeight: 'bold',
        marginRight: 15
    },
    picture: {
        width: 150,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    subtitle: {
        marginTop: 30,
        marginBottom: 10
    },
    participation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    mainInfo: {
        width: '100%'
    },
    eventName: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: 13,
        fontStyle: 'italic'
    },
    description: {
        marginTop: 20,
        fontSize: 13,
        fontStyle: 'italic'
    },
    logout: {
        marginTop: 50,
        width: '80%',
        backgroundColor: '#962929',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center'
    },
    logoutText: {
        color: 'white',
        textAlign: 'center'
    }
});
