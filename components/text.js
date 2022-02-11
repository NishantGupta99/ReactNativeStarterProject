import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = () => {
    const [name,SetName] =useState(' ')
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput style={styles.input}
   
     keyboardType='default'
      placeholder='e.g. Nishant' onChangeText={(value)=> SetName(value)}/>
        <Text style={styles.text}>your name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderBottomColor: "#FF1106",
    // borderWidth:10,
    // borderColor:'#3BE8F2',
    // borderRadius:10,
  },

  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textTransform: 'uppercase',
  },
  input: {
      width:200,
      borderWidth:1,
      borderRadius:10,
      borderColor: "#C1B8AE",
      textAlign: 'center',
      fontSize: 20

  }
});
export default InputText;
