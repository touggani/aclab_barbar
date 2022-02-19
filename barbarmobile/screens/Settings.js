import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Setting() {
  console.log("Setting")
  return (
    <View style={styles.texte}>
      <Text >NOM</Text>

      <View>
      <Text >adresse mail</Text>
      <Text >le BDE</Text>
      <Text >Université</Text>
      </View>

      <button>Button</button>
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    backgroundColor: '#E98B8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
