import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Setting() {
  console.log("Setting")
  return (
    <View style={styles.texte}>
      <Text >TA!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    backgroundColor: '#AEED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
