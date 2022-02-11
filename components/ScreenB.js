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
function ScreenB({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('Screen_A');
   //  navigation.goBack(); // to go back to the previous stack 
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Welcome to Screen B</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0fb'})}>
          <Text style={styles.text}>Go to screen A</Text>
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
   
  export default ScreenB