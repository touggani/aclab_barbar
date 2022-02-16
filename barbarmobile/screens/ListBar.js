import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Top from '../components/top';

import Bar from '../components/Bar';

export default function ListBar() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'


    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
    {
      id: 'bd7acbea-c1b1-46c2-',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
    {
      id: 'bd7acbea-c1b1-46c2-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
    {
      id: 'bd7acbea-c1b1-2-aed5-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
    {
      id: 'bd7aca-c1b1-46c2-aed5-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',
      qrcode : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

    },
  ];
  const renderItem = ({ item }) => (
    <Bar item={item}/>
  );
  



  return (
    <View style={styles.container}>
      <Top style={{flex: 1}}/>
      <Title style={styles.title}>Bars partenaires</Title>
      <View style={styles.bar, {width:'25%'}}/>
      <SafeAreaView style={{flex: 3}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />
      
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FlatList:{
    flexGrow: 0,
    height: '100%'
  },
  texte: {
    flex: 1,
    alignItems: 'center',
  },
  bar:{
    width:20,
    height:30,
    backgroundColor:'red'
  },
  title:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },


});
