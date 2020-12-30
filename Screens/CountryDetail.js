import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';


function CountryDetailsScreen({navigation, route }) {
    const [data, setData] = useState([]);
    const [population, setPopulation] = useState();
    const [name, setName] = useState();
    useEffect(() => {
      const getCountryData = async (countryName) => {
        const datas = await fetch(
          `https://covid-19-data.p.rapidapi.com/country?name=${countryName}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key':'df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            },
          }
        );
        const response = await datas.json();
        console.log(response[0])
        setData(response[0]);
      };
      const getCountryPopulation = async (countryName) => {
        const datas = await fetch(`https://world-population.p.rapidapi.com/population?country_name=${countryName}`,
        {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233",
              "x-rapidapi-host": "world-population.p.rapidapi.com"
            }
          })
        const response = await datas.json();
        // console.log(response.body.population)
        setPopulation(response.body.population);
        setName(countryName);
      };
      getCountryPopulation(route.params)
      getCountryData(route.params);
    }, []);
    // console.log(route.params)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flex:0}}>
          <Text>Covid-19 Cases</Text>  
        </View>
        <View style={{flex:0,alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{route.params}</Text>
          <Text>Total Population: {population}</Text>
          <Text>Confirmed Cases: {data.confirmed}</Text>
          <Text>Confirmed %: {(data.confirmed/population)*100}</Text>
          <Text>Recovered:  {data.recovered}</Text>
          <Text>Critical: {data.critical}</Text>
          <Text>Death: {data.deaths}</Text>
          <Button title="Add to Favourite" onPress={() =>navigation.navigate("Favourite Countries Statistics",{f_Country:name})}/>
        </View>
      </View>
    );
  }
  
  export default CountryDetailsScreen;