import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Constants from 'expo-constants'

export default function Top() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Image
            style={styles.imageTop}
            source={require('../illustrations/logo_viking.png')}
          />
        <Text style={styles.title}>BarBar</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#962929',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22.32
  },
  imageTop: {
    height: 67.68,
    width: 62,
  },
  title: {
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
