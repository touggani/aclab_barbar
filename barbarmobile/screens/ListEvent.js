import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import Top from '../components/top';
import Evenement from '../components/Evenement'

export default function ListEvent() {


    const event = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
          bde : 'BDE SPORT',
          nom : 'course à pied',
          date: '19-02-2021',
          lieux:'lille',
          description:"l'événement a lieu sur lille. La course durera plus 3h. Bon courage !"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2b',
            bde : 'BDE SPORT',
            nom : 'course à pied',
            date: '19-02-2021',
            lieux:'lille',
            description:"l'événement a lieu sur lille. La course durera plus 3h. Bon courage !"
          },
          {
            id: 'bd7acbea-cb1-46c2-aed5-3ad53bb28b',
            bde : 'BDE SPORT',
            nom : 'course à pied',
            date: '19-02-2021',
            lieux:'lille',
            description:"l'événement a lieu sur lille. La course durera plus 3h. Bon courage !"
          },
          {
            id: 'bd7cbea-c1b1-46c2-aed5-3ad53bb28b',
            bde : 'BDE SPORT',
            nom : 'course à pied',
            date: '19-02-2021',
            lieux:'lille',
            description:"l'événement a lieu sur lille. La course durera plus 3h. Bon courage !"
          },
          {
            id: 'bd7acbea-c1b1-4c2-aed5-3ad53bb28b',
            bde : 'BDE SPORT',
            nom : 'course à pied',
            date: '19-02-2021',
            lieux:'lille',
            description:"l'événement a lieu sur lille. La course durera plus 3h. Bon courage !"
          },
    ]

    const renderItem = ({ item }) => (
        <Evenement item={item}/>
      );


  return (

    <View style={styles.container}>
        <Top style={{flex: 1}}/>
        
        <View style={{flex: 4}}>
            <Text style={styles.title}>Evenement</Text>
       <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'#e8e8e8'}
      calendarHeaderStyle={{color: 'black'}}
      dateNumberStyle={{color: 'black'}}
      dateNameStyle={{color: 'black'}}
      iconContainer={{flex: 0.1}}
    />
    <FlatList
        data={event}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    </View>


  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      title:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30
      },
});
