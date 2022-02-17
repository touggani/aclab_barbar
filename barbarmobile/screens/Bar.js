import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Top from '../components/top';

export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom_bar: 'La Canopée',
      description: 'Ici, le temps ne compte plus vraiment. Grand lieu verdoyant et ouvert au coeur de la ville, on y vient pour boire un coup, bien manger et se détendre. Ce serait pas un peu les vacances !?',
      image_bar: '../illustrations/image_bar.png',
      adresse: '286 Rue Solférino, 59000 Lille',
      telephone: '07 85 84 48 69',
      boissons_phares:'Paix Dieu\nMojito\nPiña Colada'
    }
  ];
  const renderItem = ({ item }) => (
    <Item nom_bar={item.nom_bar} adresse={item.adresse} boissons_phares={item.boissons_phares} telephone={item.telephone} resume={item.description} image_bar={item.image_bar} />
  );
  const Item = ({ nom_bar, adresse, telephone, boissons_phares, resume}) => (
    
    <View style={styles.item}>

      <View style={styles.item_desc}>
        <Text style={styles.page_title}>{nom_bar}</Text> 
        <Text style={styles.item_resume}>{resume}</Text>
        <Text style={styles.item_resume}>Adresse : {adresse}</Text>
        <Text style={styles.item_resume}>Téléphone : {telephone}</Text>
      </View>
      <View>
        <Image
            style={styles.image_bar} 
            source={require('../illustrations/canopee.jpg')}
          />
      </View>
      <View style={styles.item_desc}>
        <Text style={styles.details_titre}>Boissons phares :</Text> 
        <Text style={styles.item_detail}>{boissons_phares}</Text>
      </View>
    </View>
  );
  return (
    <View>
     <Top style={{flex: 1}}/>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.list}
    showsHorizontalScrollIndicator={false}
  />
</View>
  );
}

const styles = StyleSheet.create({
  details_titre:{
    marginTop: 10,
    textAlign: 'left',
    fontWeight: 500,
    fontSize: 30,
  },
  page_title:{
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 30,
  },
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
  image_bar:{
    height: '100%',
    width: '100%',
    minHeight: 200,
    minWidth: 450,
    
  },
  list:{
    // flexWrap: 'wrap' ,
    marginBottom: 20,
  },
  item:{
  borderStyle: ' 1px solid black',
  boxShadow: 'inset 0px 2px 12px -7px #000000',
  backgroundColor: 'white',
  flexDirection: 'column',
  maxWidth: 470,
  width: '100%',
  alignSelf: 'center',
  top:100,
  marginTop:15,
  marginBottom: '100%',
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
    paddingTop: 10,
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
  },
  item_detail :{
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold'
  }
  

});