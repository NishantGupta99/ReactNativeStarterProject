import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
function ScreenA({navigation}) {
    const onPressHandler = () => {
     navigation.navigate('Screen_B');
      //navigation.replace('Screen_B');
    };
    return (
      <View style={styles.body}>
        <Text  style={styles.text}>Screen A</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0fb'})}>
          <Text style={styles.text}>Go to screen B</Text>
        </Pressable>
      </View>
    );
  }
  const styles =StyleSheet.create ({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 40
    }
  })
   
  export default ScreenA;