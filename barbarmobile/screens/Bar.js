import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Title } from 'react-native-paper';
import { Button } from 'react-native'

import Top from '../components/top';

export default function Bar() {

  return (
    <View style={styles.container}>
      <Text>Le Bar</Text>
    </View>
  );
}

<Button
    onPress = {handlePress}
    title = "Red button!"
    color = "red"
/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'#B2B2'
  }
});
