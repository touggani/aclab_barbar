import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import {Title} from 'react-native-paper';
import Top from '../components/top';
import {createParticipation, getEventsList, getLoggedUser} from "../service/api_service";
import authContext from "../context/authContext";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {format} from "date-fns";
import FlashMessage, {showMessage} from "react-native-flash-message";

export default function Event() {
    const [events, setEvents] = useState([])

    const {user, setUser, token} = useContext(authContext)

    useEffect(() => {
        getApiEventsData().then(data => {
            setEvents(data)
        })
    }, [])

    const getApiEventsData = async () => {
        const response = await getEventsList(token)
        if (response.status === 200) {
            const data = await response.json()
            return data['hydra:member']
        }
    }

    const userParticipates = (event) => {
        for (let i = 0; i < user.participations.length; i++) {
            if (user.participations[i].event.id === event.id) {
                return true
            }
        }
        return false
    }

    const refreshUser = async () => {
        const response = await getLoggedUser(user.id)
        if (response.status === 200) {
            const data = await response.json()
            setUser(data)
        }
    }

    const joinEvent = async (event) => {
      const response = await createParticipation(token, user['@id'], event['@id'])
        if (response.status === 201) {
            showMessage({
                message: "Inscription à l'événement",
                description: "Vous vous êtes bien inscrit à l'événement !",
                type: "default",
                backgroundColor: "#6A8C26", // background color
                color: "#ffffff", // text color
                style: { paddingTop: 60 }
            });
            await refreshUser()
        }
    }

    const renderItem = ({item}) => (
        <Item item={item}/>
    );

    const Item = ({item}) => {
        const showStar = userParticipates(item)
        const date = new Date(item.startDate)
        const formattedDate = format(date, "dd/MM à H") + 'h' + format(date, "mm")

        return (
            (user.bde.id === item?.bde?.id) ?
                <View style={styles.item}>
                    <View style={styles.pictureContainer}>
                        <Image
                            style={styles.picture}
                            source={{uri: 'https://barbar-api.herokuapp.com/img/' + item.bar.picture}}
                        />
                    </View>
                    <View style={styles.barMainInfo}>
                        {showStar &&
                            <View style={styles.topRight}>
                                <MaterialCommunityIcon name={'star'} color={'#962929'} size={16}/>
                            </View>
                        }
                        <Text style={styles.barMainName}>{item.bar.name}</Text>
                        <Text style={styles.eventName}>{item.name}</Text>
                        <Text style={styles.eventDate}>Le {formattedDate}</Text>
                        <Text style={{marginTop: 10}}>{item.description}</Text>
                        {!showStar &&
                            <Pressable style={styles.joinBtn} onPress={() => {
                              joinEvent(item).then()
                            }}>
                                <Text style={styles.joinBtnText}>Rejoindre</Text>
                            </Pressable>
                        }
                    </View>
                </View>
                :
                <></>
        )
    }

    return (
        <View style={styles.container}>
            <FlashMessage position="top" />
            <Top/>
            <Title style={styles.page_title}>Liste des événements</Title>
            <Text style={styles.legend}><MaterialCommunityIcon name={'star'} color={'#962929'} size={16}/> Evénements
                auxquels vous participez.</Text>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page_title: {
        marginTop: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    legend: {
        marginTop: 10,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    container: {
        flex: 1,
        alignContent: 'center',
        textAlign: 'center',
    },
    list: {
        marginVertical: 20,
        paddingHorizontal: 20
    },
    myItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E98B8B',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    picture: {
        width: 150,
        height: 150,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    barMainInfo: {
        paddingHorizontal: 10,
        flexShrink: 1
    },
    eventName: {
        fontStyle: 'italic'
    },
    barMainName: {
        fontWeight: 'bold',
    },
    barMainPhone: {
        textAlign: 'center'
    },
    barSecondaryInfo: {
        flexGrow: 1
    },
    pressableCalendar: {
        color: '#962929',
        textDecorationLine: 'underline'
    },
    topRight: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    joinBtn: {
        marginTop: 10,
        backgroundColor: '#962929',
        borderRadius: 5,
        padding: 10
    },
    joinBtnText: {
        color: 'white',
        textAlign: 'center'
    },
    eventDate: {
        fontSize: 13,
        fontStyle: 'italic'
    }
});
