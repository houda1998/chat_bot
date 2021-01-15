import React,{useState, useEffect} from 'react'
import { View,StyleSheet,SafeAreaView, TextInput } from 'react-native'
import { Divider, List,Text,Card,Button, Spinner  } from '@ui-kitten/components';
import {CovidApi} from "../api.jsx"
import { Dimensions } from "react-native";


function StatCountriesScreen({ navigation }) {
    const [searchCountry,setSearchCountry] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [isLoading, setLoading] = useState(true);
    

    useEffect(() => {
        CovidApi.get('/countries?include=timeline')
      .then((response) => {
        setFilteredDataSource(response.data.data);
        setMasterDataSource(response.data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
      setLoading(true)
    }, []);
   
    

    const localeString=(x) =>{
      if(x!=null && x!=undefined)
      return x.toLocaleString('en-GB');
  }
        const searchFilterFunction = (text) => {
            // Check if searched text is not blank
            if (text) {
              // Inserted text is not blank
              // Filter the masterDataSource
              // Update FilteredDataSource
              const newData = masterDataSource.filter(
                function (item) {
                  const countryData = item.name
                    ? item.name.toUpperCase()
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
          
              
              
                const renderItem = ({item}) => {
                 
                  if(item.name!="World" && item.timeline.length >0)
                  return (
                    <View style={{padding:10}}>
                    <Card style={{  margin: 10,backgroundColor:"#73EAB4"}}
                    
                    >
                    <Text style={{color:"#353d2f",fontFamily:"serif",fontSize:20,alignContent:"center",marginLeft:"30%"}}>
                     {item.name}
                    </Text>
                 <Text style={{color:"#E6452C",fontFamily:"serif",fontSize:20}}>
                  Confirmés {localeString(item.today.confirmed)}
                 </Text>
                 <Text style={{fontFamily:"serif",fontSize:20,color:"black"}}>
                 Décès {localeString(item.today.deaths)}
                 </Text>
                 <Button onPress={() =>{navigation.navigate('chartsScreen',{country:{item}})}}>
                 Voir plus en details
                </Button>
               </Card>
              </View>
              
                );
                  };
                  
          
     
          
        
          
    if(isLoading==true) 
    return (
      <SafeAreaView style={{flex: 2,paddingTop:30,backgroundColor:"#353d2f"}}>
      <View style={{backgroundColor:"#353d2f",flex: 1,
    justifyContent: 'center',
    alignItems:'center'}}>
      <Text>Veuillez patienter...</Text>
        <Spinner size="large"/>
        </View>
        </SafeAreaView>
    )
    else return (
        <SafeAreaView style={{flex: 2,paddingTop:30,backgroundColor:"#353d2f"}}>
      <View style={{backgroundColor:"#353d2f",}}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={searchCountry}
          underlineColorAndroid="transparent"
          placeholder="chercher le pays"
        />
        <List style={{border:"1 solide",backgroundColor:"#353d2f"}}
          data={filteredDataSource}
          keyExtractor={  keyExtractor = () => {
            return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
          }
        }
          countrySeparatorComponent={()=><Divider style={{color:"black"}}></Divider>}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
};


  const styles = StyleSheet.create({
   
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
