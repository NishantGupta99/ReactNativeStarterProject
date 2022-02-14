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
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createStackNavigator();



const App = () => { 
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName= "Login" screenOptions= {{ 
     headerTitleAlign: 'center',
     headerStyle: { 
       backgroundColor: '#0080ff'
     },
     headerTintColor : '#ffffff',
     headerTintStyle : {

       fontSize: 25,
       fontWeight : 'bold'
     }
   }}>

     <Stack.Screen name="Login" component={Login}
     options={{headerShown:  false}}/>

     <Stack.Screen name="Home" component={Home} />
    
   
   </Stack.Navigator>
 </NavigationContainer>
  );
};

export default App;
