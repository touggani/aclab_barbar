import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Event() {
  console.log("Setting")
  return (
      <View style={styles.texte}>
        <Text >Event by Youssef</Text>
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
