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
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  GestureHandlerRootView,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View>
      <Text>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0fb'})}>
        <Text style={styles.text}>Go back to screen B</Text>
      </Pressable>
    </View>
  );
}
function ScreenB() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome to Screen B</Text>
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
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

export default App;
