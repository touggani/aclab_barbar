import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Pressable} from 'react-native';
import {Title} from 'react-native-paper';
import Top from '../components/top';
import {CustomModal} from "../components/CustomModal";

export default function Bar({navigation, route}) {
    const {bar} = route.params
    const [modalVisible, setModalVisible] = useState(false)


    navigation.setOptions({title: bar.name})

    return (
        <View style={styles.container}>
            <Top noMargin={true}/>
            <Title style={styles.page_title}>{bar?.name}</Title>

            <SafeAreaView>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.pictureContainer}>
                        <Image
                            style={styles.picture}
                            source={{uri: 'https://barbar-api.herokuapp.com/img/' + bar?.picture}}
                        />
                    </View>

                    <View style={{padding: 15}}>
                        <Text>Contact : {bar?.phone}</Text>
                        <Pressable onPress={() => {
                            setModalVisible(true)
                        }}>
                            <Text style={styles.pressableCalendar}>Voir le calendrier</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
            {modalVisible && <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedSchedule={bar?.schedule} />}
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
        alignContent: 'center',
        textAlign: 'center',
    },
    list: {
        marginVertical: 20,
        paddingHorizontal: 20
    },
    item: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    pictureContainer: {
        marginTop: 20
    },
    picture: {
        width: '100%',
        height: 200,
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
    data: {
        marginTop: 30,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    pressableCalendar: {
        color: '#962929',
        textDecorationLine: 'underline',
        marginTop: 10
    }
});
