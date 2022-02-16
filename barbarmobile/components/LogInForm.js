import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button, TextInput } from 'react-native';


export default function Log() {


  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (

    <View style={styles.Login}>
      <Text style={styles.title}>connexion</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={setId}
          placeholder="Identifiant"
          placeholderTextColor="rgba(255,255,255,0.3)" 
        />
        <TextInput
          style={[styles.input, {marginTop:40}]}
          value={pwd}
          onChangeText={setPwd}
          placeholder="Mot de passe"
          placeholderTextColor="rgba(255,255,255,0.3)" 
        />
        <Pressable style={styles.button}>
          <Text style={styles.text}>Connexion</Text>
        </Pressable>
      </View>
    </View>


  );
}


const styles = StyleSheet.create({
 Login:{
  flex: 1,
    alignItems: 'center',
 },
 title:{
   fontSize: 30,
   color:"white"
 },
 form:{
  width:"90%",
  alignItems: 'center',
  top:50,
 },
 input:{
  width:"90%",
  fontSize:20,
  borderBottomColor:"white",
  borderBottomWidth:1
  },
  button:{
    width: "70%",
    backgroundColor:'#962929',
    padding: 20,
    borderRadius: 30,
    marginTop:40
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  }
});
