import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';


export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom_bde: 'BDE FGES',
      resume_event: 'RESUME DE L EVENT. Venez nombreux à la journée porte ouverte de la Faluche. Le QR code vous permettra d\'avoir une consommation offerte',
      image_bar: '../illustrations/image_bar.png',
      image_bde: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom_bde: 'BDE FGES',
      resume_event: 'RESUME DE L EVENT. Venez nombreux à la journée porte ouverte de la Faluche. Le QR code vous permettra d\'avoir une consommation offerte',
      image_bar: '../illustrations/image_bar.png',
      image_bde: '../illustrations/image_bar.png',

    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom_bde: 'BDE FGES',
      resume_event: 'RESUME DE L EVENT. Venez nombreux à la journée porte ouverte de la Faluche. Le QR code vous permettra d\'avoir une consommation offerte',
      image_bar: '../illustrations/image_bar.png',
      image_bde: '../illustrations/image_bar.png',

    },
  ];
  const renderItem = ({ item }) => (
    <Item nom_bde={item.nom_bde} image_bde={item.image_bde} resume={item.resume_event} image_bar={item.image_bar} />
  );
  const Item = ({ nom_bde, image_bde ,image_bar, resume}) => (
    <View style={styles.item}>
      <View style={styles.item_desc}>
        <View style={styles.item_account}>
        <Image
              style={styles.image_bde}
              source={require('../illustrations/image_bar.png')}
            />
          <Text style={styles.item_title}>{nom_bde}</Text>
          </View>
        <Text style={styles.item_resume}>{resume}</Text>
      </View>
      <View>
        <Image
            style={styles.image_event} 
            source={require('../illustrations/image_bar.png')}
          />

      </View>
  
      
      

    </View>
  );
  return (
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.list}
    showsHorizontalScrollIndicator={false}
  />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'#B2B2'
  },
  image_bde:{
    height: 40,
    width: 40,
    borderRadius: '50%',
  },
  image_event:{
    height: '100%',
    width: '100%',
    minHeight: 200,
    minWidth: 450,
    
  },
  list:{
    flexWrap: 'wrap' 
  },
  item:{
  borderStyle: ' 1px solid black',
  flexDirection: 'column',
  maxWidth: 470,
  width: '100%',
  alignSelf: 'center',
  top:15,
  marginTop:15,
  marginBottom: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  item_account:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  item_desc:{
    paddingBottom: 20,
    paddingTop: 5,
    paddingLeft:30,
    paddingRight: 30,
  },
  item_title:{
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: 600,
  },
  item_resume :{
    paddingTop: 20,
    fontSize: 15
  }

});
