import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';


export default function Popup({visible, closeModal, nom, qrcode}) {

  

  return (
    <View style={styles.texte}>
       <Dialog
        visible={visible}
        onTouchOutside={() => {
            closeModal();
        }}
      >
        <DialogContent>
        <Text style={styles.title}>{nom}</Text>
        <Image
            style={styles.qrcode}
            source={{uri: qrcode}}
          />
        </DialogContent>
      </Dialog>
      
    </View>
  );
}

const styles = StyleSheet.create({
  qrcode:{
    width:300,
    height:300
  },

  title:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },

});
