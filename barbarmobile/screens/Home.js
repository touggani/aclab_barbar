import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList, Modal, Pressable} from 'react-native';
import {Title} from 'react-native-paper';
import Top from '../components/top';
import {getBarsList} from "../service/api_service";
import {save} from "../service/storage";
import authContext from "../context/authContext";
import modal from "react-native-web/dist/exports/Modal";
import {CustomModal} from "../components/CustomModal";

export default function Home() {
    const [bars, setBars] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedSchedule, setSelectedSchedule] = useState('')

    const {token} = useContext(authContext)

    useEffect(() => {
        getApiBarsData().then(data => {
            setBars(data)
        })
    }, [])

    useEffect(() => {
        if (selectedSchedule !== '') {
            setModalVisible(!modalVisible)
        }
    }, [selectedSchedule])

    const getApiBarsData = async () => {
        const response = await getBarsList(token)
        if (response.status === 200) {
            const data = await response.json()
            return data['hydra:member']
        }
    }

    const renderItem = ({item}) => (
        <Item name={item.name} phone={item.phone} picture={item.picture} schedule={item.schedule}/>
    );
    const Item = ({name, phone, picture, schedule}) => (
        <View style={styles.item}>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{uri: 'https://barbar-api.herokuapp.com/img/' + picture}}
                />
            </View>
            <View style={styles.barMainInfo}>
                <Text style={styles.barMainName}>{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View style={styles.barSecondaryInfo}>
                <Pressable onPress={() => {
                    setSelectedSchedule(schedule)
                }}>
                    <Text style={styles.pressableCalendar}>Calendrier</Text>
                </Pressable>
            </View>
        </View>
    );
    return (
        <View>
            <Top style={{flex: 1}}/>
            <Title style={styles.page_title}>Accueil</Title>
            {<FlatList
                data={bars}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
            />}
            {modalVisible && <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedSchedule={selectedSchedule} />}
        </View>
    );
}

const styles = StyleSheet.create({
    page_title: {
        marginTop: 130,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        flex: 1,
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor: '#B2B2'
    },
    list: {
        marginVertical: 20,
        paddingHorizontal: 20
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    },
    pictureContainer: {
        flexGrow: 1
    },
    picture: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    barMainInfo: {
        flexGrow: 1,
    },
    barMainName: {
        fontWeight: 'bold'
    },
    barSecondaryInfo: {
        flexGrow: 1
    },
    pressableCalendar: {
        color: '#962929',
        textDecorationLine: 'underline'
    }
});
