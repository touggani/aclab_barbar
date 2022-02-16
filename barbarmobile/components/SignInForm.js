import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button, TextInput } from 'react-native';


export default function SignInForm() {

    const [etape, setEtape] = useState(0);

    const [nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [nEtudiant, setNetudaint] = useState("");
    const [adressemail, setAdressemail] = useState("");
    const [universite, setUniversite] = useState("");
    const [bde, setBde] = useState("");
    const [pwd, setPwd] = useState("");


  return (

    <View style={styles.Login}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.form}>
          {etape === 0 ? 
        <View style={{width:"100%", alignItems:"center"}}>
            <TextInput
                style={styles.input}
                value={nom}
                onChangeText={setNom}
                placeholder="Nom"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <TextInput
                style={[styles.input, {marginTop:25}]}
                value={Prenom}
                onChangeText={setPrenom}
                placeholder="Prenom"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <TextInput
                style={[styles.input, {marginTop:25}]}
                value={nEtudiant}
                onChangeText={setNetudaint}
                placeholder="Prenom"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <Pressable style={styles.button} onPress={() =>setEtape({ etape:1 })}>
                <Text style={styles.text}>Suivant</Text>
            </Pressable>
        </View> : 
        <View style={{width:"100%", alignItems:"center"}}>
            <TextInput
                style={styles.input}
                value={adressemail}
                onChangeText={setAdressemail}
                placeholder="Adresse mail"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <TextInput
                style={[styles.input, {marginTop:25}]}
                value={universite}
                onChangeText={setUniversite}
                placeholder="Université"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <TextInput
                style={[styles.input, {marginTop:25}]}
                value={bde}
                onChangeText={setBde}
                placeholder="BDE Affilié"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <TextInput
                style={[styles.input, {marginTop:25}]}
                value={pwd}
                onChangeText={setPwd}
                placeholder="Mot de passe"
                placeholderTextColor="rgba(255,255,255,0.3)" 
            />
            <Pressable style={styles.button}>
                <Text style={styles.text}>S'inscrire</Text>
            </Pressable>
        </View>}
        
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
  top:30,
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
    marginTop:30
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  }
});
