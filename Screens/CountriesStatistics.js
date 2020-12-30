import React, { useEffect, useState } from 'react';
import { TextInput,ScrollView, StyleSheet,FlatList, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();
//const url = 'https://world-population.p.rapidapi.com/worldpopulation"';
//const url = "https://world-population.p.rapidapi.com/allcountriesname";
const url = 'https://api.covid19api.com/countries';
//const url = 'https://api.covid19api.com/summary';


function CountriesStatisticScreen({navigation}){
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    const getToatalCountries = async () => {
      const datas = await fetch(
        'https://world-population.p.rapidapi.com/allcountriesname',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
            'df02d31564mshbb4784e074fce6dp123aacjsn975b88ad8233',
            'x-rapidapi-host': 'world-population.p.rapidapi.com',
          },
        }
      );

      const response = await datas.json();
      setCountries(response.body.countries);
      setFullData(response.body.countries);

    };
    getToatalCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search,countries]);


    return (
      <View style={styles.container}>
        <TextInput style={{borderWidth:2, padding:10,width:"50%"}} placeholder="Search...."  
          onChange={(e) => setSearch(e.target.value)}/>
          <FlatList data={countries} keyExtractor={({id}, index)=>id}
            renderItem={({item}) =>(
          <TouchableOpacity onPress={() => {navigation.navigate('Country Detail', item)}}>
              <Text style={styles.list} > {item} </Text>
          </TouchableOpacity>
        )}
        />
      </View>
   )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    alignItems:"flex-start",
    backgroundColor: '#fff',
    width: '80%',
    fontSize:18,
    fontWeight:'bold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth:2,
  },
  textSt:{
    fontSize:15,
    fontWeight:'bold',
  }
});

export default CountriesStatisticScreen;