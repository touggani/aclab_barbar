import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView, Alert} from 'react-native';
import Popup from '../components/Popup';

export default function Bar({item}) {

    const [visible, setVisible] = useState(false);
    const closeModal = () => setVisible(false);
    return (
        <View style={styles.item}>
            <View style={{flex: 2}}>
                <Image
                    style={styles.image}
                    source={require('../illustrations/image_bar.png')}
                />
            </View>
            <View style={{flexBasis: 100, flex: 3}}>
                <Text style={styles.title}>{item.nom}</Text>
                <Text style={styles.adresse}>{item.adresse}</Text>
                <Text style={styles.telephone}>Téléphone: {item.telephone}</Text>
                <Pressable style={styles.btn_qrcode} onPress={() => {
                    setVisible(true)
                }}>
                    <Text style={styles.textqrcode}>QRCODE</Text>
                </Pressable>
            </View>
            <Popup visible={visible} closeModal={closeModal} qrcode={item.qrcode} nom={item.nom}/>
        </View>
    );
}

const styles = StyleSheet.create({

    btn_qrcode: {
        backgroundColor: '#962929',
        textAlign: 'center',
        top: 10,
        padding: '2%',
        width: '50%',
        borderRadius: 30,
        margin: 'auto',
        marginLeft: 70
    },
    textqrcode: {
        textAlign: 'center',
        color: 'white'
    },

    adresse: {
        textAlign: 'center',
    },
    telephone: {
        textAlign: 'center',
    },

    item: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        top: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        borderColor: 'black'
    },
    list: {
        marginTop: 10,

    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30
    },
    nom: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30
    },
    image: {
        position: 'absolute',
        height: 150,
        width: 140,
        zIndex: 100,
    },

});
