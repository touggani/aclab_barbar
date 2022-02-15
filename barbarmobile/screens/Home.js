import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Title } from 'react-native-paper';

import Top from '../components/top';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'#B2B2'
  }
});
