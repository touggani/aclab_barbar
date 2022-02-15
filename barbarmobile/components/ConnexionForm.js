import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';



export default function ConnexionForm() {
  console.log("Home")
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
      />
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    backgroundColor: '#AEED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: 10,
    alignContent: 'center'
  }
});
