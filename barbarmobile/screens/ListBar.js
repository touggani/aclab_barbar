import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Top from '../components/top';

export default function ListBar() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-2-aed5-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7aca-c1b1-46c2-aed5-3ad53abb28ba',
      nom: 'Arena bar Lille',
      adresse: '186 Rue Solférino, 59800 Lille',
      telephone: '06 61 04 26 53',
      image: '../illustrations/image_bar.png',

    },
  ];
  const renderItem = ({ item }) => (
    <Item nom={item.nom} adresse={item.adresse} image={item.image} telephone={item.telephone}/>
  );
  
  const [visible, setVisible] = useState(false);



  const Item = ({ nom, image, adresse, telephone }) => (
    <View style={styles.item}>
      <View style={{flex: 2}}>
        <Image
            style={styles.image}
            source={require('../illustrations/image_bar.png')}
          />
      </View>
      <View style={{flexBasis: 100,flex: 3}}>
        <Text style={styles.title}>{nom}</Text>
        <Text style={styles.adresse}>{adresse}</Text>
        <Text style={styles.telephone}>Téléphone: {telephone}</Text>
        <Pressable style={styles.btn_qrcode} onClick={() => setVisible(!visible)}>
          <Text style={styles.text}>QRCODE</Text>
        </Pressable>

      </View>
      

    </View>
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
  item:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    top:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection:'row',
    flex: 1,
    marginTop:10
  },
  list:{
    marginTop:10
  },
  title:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  nom:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  adresse:{
    textAlign: 'center',
  },
  telephone:{
    textAlign: 'center',
  },
  image:{
    position: 'absolute',
    height: 150,
    width: 140,
    zIndex:100,
  },
  btn_qrcode:{
    backgroundColor: '#962929',
    textAlign: 'center',
    top:10,
    padding: '2%',
    width:'30%',
    borderRadius:30,
    margin: 'auto'
  }


});
