import React, { useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button } from 'react-native';

import LogInForm from "../components/LogInForm"
import SignInForm from "../components/SignInForm"
import RBSheet from "react-native-raw-bottom-sheet";


export default function Log() {
  function on(){
    alert("Connexion");
  }
  

  const login = useRef();
  const signin = useRef();
  
  return (
    
    /*<BottomNavigator/>*/

    <View style={[styles.mainContainer,styles.container, styles.flexColumn]}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../illustrations/logo_viking.png')}/>
      </View>
      <View style={{flex:2}}>        
        <Pressable style={styles.buttonConnexion} onPress={() => login.current.open()}>
          <Text style={styles.text}>Connexion</Text>
        </Pressable>
        <Pressable style={styles.buttonConnexion} onPress={() => signin.current.open()}>
          <Text style={styles.text}>S'inscrire</Text>
        </Pressable>
        
        <RBSheet
        ref={login}
        height={400}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.8)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container:{
            backgroundColor:"#d64e4e"
          }
        }}
      >
        <LogInForm/>
      </RBSheet>
      <RBSheet
        ref={signin}
        height="400"
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.8)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container:{
            backgroundColor:"#d64e4e"
          }
        }}
      >
        <SignInForm/>
      </RBSheet>
      </View>

    </View>


  );
}


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#962929',
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    
  },
  flexColumn:{
    flexDirection: "column",
  },
  buttonConnexion:{
    width: 350,
    backgroundColor:'#D64E4E',
    padding: 20,
    borderRadius: 30,
    margin: 10
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },containerContent: {flex: 1, marginTop: 40},
  
});
