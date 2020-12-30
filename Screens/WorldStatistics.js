import React, { useEffect, useState } from 'react';
import { StyleSheet,FlatList, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();
const url = 'https://covid-19-data.p.rapidapi.com/totals';

function WorldStatisticScreen(){
  const [getData,setData] = useState([]);
  const [population, setPopulation] = useState();
  
  useEffect(() => {

   const getWorldData = async () => {
       const worldData = await fetch('https://covid-19-data.p.rapidapi.com/totals',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key':
                'df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            },
          }
        );
        const response = await worldData.json();
        console.log(response)
        setData(response);
      };

      const getWorldPopulation = async () => {
        const worldPopulation = await fetch(
           "https://world-population.p.rapidapi.com/worldpopulation", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "578a301ae2msh4bac73eef36107ep1177a5jsn27c14c5ea2e4",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
         }
      })
        const response = await worldPopulation.json();
        // console.log(response.body.population)
        setPopulation(response.body.world_population);
      };
      getWorldPopulation();
      getWorldData();
    }, []);
  


   return(
      <View style={styles.container}>
            <Text style={{fontSize:15,fontWeight:'bold', justifyContent:"center"}}>
               Total Population: {population}
            </Text>
            <FlatList  data={getData} keyExtractor={({id}, index)=>id}
               renderItem={({item}) =>(
                  <Text style={styles.listSt}>Total Cases: {item.confirmed}{"\n"}
                        Recovered: {item.recovered}{"\n"}
                        Critical: {item.critical}{"\n"}
                        Death: {item.deaths}{"\n"}
                        Last Update: {item.lastUpdate}{"\n"}
                  </Text>

            )
            }/>
      </View>
   )
  
};


const styles = StyleSheet.create({
   container:{
      flex:2,
      justifyContent:"center",
      alignItems:"center",
      marginTop:50
   },
   listSt:{
      padding:5,
      fontSize:15,
      fontWeight:'bold'
   }
});

export default WorldStatisticScreen;