import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default function Top() {
  return (
    <View style={styles.texte}>
      <View style={styles.oval}/>
      <Image
          style={styles.imageTop}
          source={require('../illustrations/logo_viking.png')}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    alignItems: 'center',
  },

  oval: {
    position: 'absolute',
    width: "120%",
    height: 200,
    borderRadius: 85,
    backgroundColor: "#962929",
    marginTop: -100,
    top: 0,
    zIndex: 10,
    alignItems: 'center'

  },
  imageTop:{
    position: 'absolute',
    height: 67.68,
    width: 62,
    zIndex:100,
    top: 15
  }

});
