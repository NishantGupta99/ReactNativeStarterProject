import React, {useState} from 'react';
// import type {Node} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import Flat from './components/flatlist';
import InputText from './components/text';
import Form from './components/form';
const App = () => {
  
  return (
    //  <InputText/>
    <Form/>
    // <ScrollView style={styles.body} refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['#F08914']} />}>
    //   {Items.map(i => {
    //     return (
    //       <View style={styles.item} key={i.key}>
    //         <Text style={styles.text}>{i.item}</Text>

    //       </View>
    //     );
    //   })}
     
    //   </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    // alignItems: 'stretch',
    // justifyContent: 'center',
    // borderBottomColor: "#FF1106",
    // borderWidth:10,
    // borderColor:'#3BE8F2',
    // borderRadius:10,
  },
  item: {
    margin:10,
    backgroundColor: '#3A52F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App;
