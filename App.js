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
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();



const App = () => {
  return (
   <NavigationContainer>
   <Tab.Navigator screenOptions={({route}) => ({tabBarIcon:({focused, size , color}) => {
     let iconName;
     if(route.name==='ScreenA') {
      iconName= 'amilia'
     }
     else if (route.name==='ScreenB') {
      iconName= 'bell'
     }
   }})}>
     <Tab.Screen  name="Screen_A" component={ScreenA} />
     <Tab.Screen name="Screen_B" component={ScreenB} />
   </Tab.Navigator>
 </NavigationContainer>
  );
};

export default App;
