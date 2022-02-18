import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView, Alert } from 'react-native';
import Popup from '../components/Popup';

export default function Evenement({item}) {


  return (
      <View style={styles.item}>
      <View style={{flexBasis: 100,flex: 3}}>
        <Text style={styles.bde}>{item.bde}</Text>
        <Text style={styles.title}>{item.nom}</Text>
        <Text style={styles.des}>Date: {item.date}</Text>
        <Text style={styles.des}>Lieu: {item.lieux}</Text>
        <Text style={styles.des}>Description: {item.description}</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.textqrcode}>En savoir plus</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    btn:{
        backgroundColor: '#962929',
        textAlign: 'center',
        top:10,
        padding: '2%',
        width:'50%',
        borderRadius:30,
        margin: 'auto',
        marginLeft: 70
      },
      textqrcode:{
        textAlign:'center',
        color:'white'
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
    marginTop:10,
    borderColor:'black'
  },
  list:{
    marginTop:10,
    
  },
  title:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20
  },
  nom:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  des:{
      padding:5
  },
  bde:{
      paddingStart:20,
    paddingTop:20,
    fontSize:20
    }

});
