import React, { useState } from 'react';
import { StyleSheet,FlatList,Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function FavouriteCountriesScreen({route}){
  const country = route.params.f_Country;
  const [getList, setList] = useState([country]);

  
  const ClearData = () =>{
    setList([]);
  }

  return(
    <View style={styles.container}>

        <FlatList data={getList} keyExtractor={({id}, index)=>id}
        renderItem={({item}) =>(
          <TouchableOpacity>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        />
      <Button title="Clear" onPress={ClearData}/>

     
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
  crosstextContainer:{
    backgroundColor:'gray', 
    borderRadius:50, 
    padding:5,
    width:50,
    justifyContent:'center'
  },
  crosstext:{
    fontSize:26,
    color:'red',
    padding:10,
    fontWeight:'bold'
  },
  scrollText:{
    padding:10,
    fontSize:30,
    color:'white',
  },
  scrollView:{
    width:'100%',
    
  },
  scrollviewItem:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:'100%',
    margin:5,
    padding:10,
    alignSelf:'center',
    backgroundColor:"tomato",
    borderRadius:10,
  },
});

export default FavouriteCountriesScreen;