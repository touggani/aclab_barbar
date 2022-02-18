import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList, Modal, Pressable} from 'react-native';
import {Title} from 'react-native-paper';
import Top from '../components/top';
import {getBarsList, getBdeList} from "../service/api_service";
import {save} from "../service/storage";
import authContext from "../context/authContext";
import modal from "react-native-web/dist/exports/Modal";
import {CustomModal} from "../components/CustomModal";

export default function Bde() {
    const [bdes, setBdes] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedSchedule, setSelectedSchedule] = useState('')

    const {user} = useContext(authContext)

    useEffect(() => {
        getApiBarsData().then(data => {
            setBdes(data)
        })
    }, [])

    useEffect(() => {
        if (selectedSchedule !== '') {
            setModalVisible(!modalVisible)
        }
    }, [selectedSchedule])

    const getApiBarsData = async () => {
        const response = await getBdeList()
        if (response.status === 200) {
            const data = await response.json()
            return data['hydra:member']
        }
    }

    const renderItem = ({item}) => (
        <Item name={item.name} phone={item.phone} logo={item.logo} />
    );
    const Item = ({name, phone, logo}) => (
        <View style={[user.bde.name === name ? styles.myItem : styles.item]}>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{uri: 'https://barbar-api.herokuapp.com/img/' + logo}}
                />
            </View>
            <View style={styles.barMainInfo}>
                <Text style={styles.barMainName}>{name}</Text>
                <Text style={styles.barMainPhone}>{phone}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <Top/>
            <Title style={styles.page_title}>Liste des BDE</Title>
            <Text style={styles.legend}>* Sur fond rouge le BDE auquel vous appartenez.</Text>
            {<FlatList
                data={bdes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
            />}
            {modalVisible && <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                                          selectedSchedule={selectedSchedule}/>}
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
        width: 150,
        height: 50,
        borderRadius: 5
    },
    barMainInfo: {
        flexGrow: 1,
    },
    barMainName: {
        fontWeight: 'bold',
        textAlign: 'center'
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
    }
});
