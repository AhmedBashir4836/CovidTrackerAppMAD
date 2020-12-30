import React, { useEffect, useState } from 'react';
import { StyleSheet,FlatList, Text, View,Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import WorldStatisticScreen from './Screens/WorldStatistics';
import CountriesStatisticScreen from './Screens/CountriesStatistics';
import FavouriteCountriesScreen from './Screens/FavouriteCountries';
import CountryDetailsScreen from './Screens/CountryDetail';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Drawers(){
  return(
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Home" component={StackNavigator}/>
      <Drawer.Screen name="World Statistics" component={WorldStatisticScreen}/>
      <Drawer.Screen name="Countries Statistics" component={CountriesStatisticScreen}/>
      <Drawer.Screen name="Favourite Countries Statistics" component={FavouriteCountriesScreen}/>
    </Drawer.Navigator>
  )
}

function StackNavigator({navigation}){
  return(
    <Stack.Navigator 
      screenOptions={{
        headerShown: false}}>
      <Stack.Screen name="Covid-19 Information" component={HomeScreen}/>
      <Stack.Screen name="Country Detail" component={CountryDetailsScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {

  return (
      <NavigationContainer>
        <Drawers/>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
