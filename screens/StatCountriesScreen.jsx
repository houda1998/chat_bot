import React,{useState, useEffect} from 'react'
import { View,StyleSheet,SafeAreaView,
    FlatList,
    TextInput,Alert } from 'react-native'
import * as eva from '@eva-design/eva'
import { Divider, List, ListItem } from '@ui-kitten/components';
import {statApi} from "../api.jsx"
function StatCountriesScreen() {
    const [searchCountry,setSearchCountry] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    
    useEffect(() => {
        statApi.get('/countries')
        .then((response) => {
          setFilteredDataSource(response.data);
          setMasterDataSource(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
        const searchFilterFunction = (text) => {
            // Check if searched text is not blank
            if (text) {
              // Inserted text is not blank
              // Filter the masterDataSource
              // Update FilteredDataSource
              const newData = masterDataSource.filter(
                function (item) {
                  const countryData = item.country
                    ? item.country.toUpperCase()
                    : ''.toUpperCase();
                  const textData = text.toUpperCase();
                  return countryData.indexOf(textData) > -1;
              });
              setFilteredDataSource(newData);
             setSearchCountry(text);
            } else {
              // Inserted text is blank
              // Update FilteredDataSource with masterDataSource
              setFilteredDataSource(masterDataSource);
             setSearchCountry(text);
            }
          };
          const renderItem = ({item}) => (
              <ListItem
              onPress={()=>getcountry(item)}
              title={item.country}
              description={ 
                'Today cases : '+item.todayCases+' \n' + 'Today cases : '+item.todayDeaths}
              ></ListItem>
            );
            
          
          const getcountry = (item) => {
            // Function for click on an country
            Alert.alert("Plus d'infos",
              'country : ' + item.country+'\n' 
            + ' Total cases : ' + item.cases+'\n' 
            + ' Total deaths : ' + item.deaths+'\n' 
            + ' Today cases : ' + item.todayCases+'\n' 
            + ' Today deaths : ' + item.todayDeaths+'\n' 
            + ' recovered : ' + item.cases);
          };

    return (
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={searchCountry}
          underlineColorAndroid="transparent"
          placeholder="searchCountry Here"
        />
        <List
          data={filteredDataSource}
          keyExtractor={  keyExtractor = () => {
            return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
          }
        }
          countrySeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
  const styles = StyleSheet.create({
    container: {
   

    },
    itemStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
  });
  
    


export default StatCountriesScreen
