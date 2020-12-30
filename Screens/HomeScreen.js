import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ImageBackground} from 'react-native';

function HomeScreen({navigation}){
  return(
    <ImageBackground source={require('../image/covid.jpg')} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.textStyle}>Covid-19</Text>
        <Text style={styles.textStyle}>Statistic Application</Text>
        <Text style={styles.textStyle}>Latest Updates of Covid-19 from all over the World</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner:{
    width:'80%',
    height:'80%',
    backgroundColor:'rgba(255,255,255,.7)',
    alignItems:"center",
  },
  textStyle:{
    alignItems:"center",
    justifyContent:"center",
    fontSize:30,
    fontWeight:'bold',
    color:"#585858"
  }
});

export default HomeScreen;