/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {getFontSize, getLayoutSize} from "./src/Helper/ResponsiveUtils"
import AppString from "./src/Helper/AppString"

import Main from './src/Screens/Main'

const Stack = createStackNavigator();

function SplashScreen({navigation}){
  setTimeout(() => {
     navigation.replace('Main');
  }, 2000);
  return(
    <View style={{backgroundColor:'#7F7F7F',flex:1,justifyContent:'center',alignItems:'center',}}>
        <Text style={{fontSize:getFontSize(35),fontWeight:'bold',
        color:'#FFFF',textAlign:'center'}}>{AppString.app_name}</Text>
    </View>
    )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
