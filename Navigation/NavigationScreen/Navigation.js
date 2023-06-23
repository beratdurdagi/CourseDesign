import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen';
import DetaisScreen from '../../src/screens/DetaisScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="HomeScreen" component={HomeScreen} />
     <Stack.Screen name="DetailsScreen" component={DetaisScreen} />
   </Stack.Navigator>
 </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})