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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab = createBottomTabNavigator();



const App = () => { 
  return (
   <NavigationContainer>
   <Tab.Navigator screenOptions={({route}) => ({tabBarIcon:({focused, size , color}) => {
     let iconName;
     if(route.name==='ScreenA') {
      iconName= 'amilia';
      size= focused? 25:20;
      color= '#60B82D'
     }
     else if (route.name==='ScreenB') {
      iconName= 'bell';
      size= focused? 25:20;
      color= '#60B82D'
     }
     return (
       <FontAwesome5 
       name={iconName}
       size={size}
       color={color}
       />
     )
   }})}>
     <Tab.Screen  name="Screen_A" component={ScreenA} />
     <Tab.Screen name="Screen_B" component={ScreenB} />
   </Tab.Navigator>
 </NavigationContainer>
  );
};

export default App;
