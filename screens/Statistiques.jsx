import React, { useEffect, useState } from 'react'
import { View,StyleSheet } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Button, Card, Layout, Text } from '@ui-kitten/components';
import {statApi} from "../api.jsx"
import { SafeAreaView } from 'react-native-safe-area-context';
function StatistiqueScreen({ navigation }) {
  const [GlobalStat, setGlobalStat] = useState([]);

  useEffect( () =>  {
    const fetchData=()=>{
      statApi.get('/all').
      then(response=> {
      console.log(response.data)
      setGlobalStat(response.data);
      setcases(GlobalStat.cases)
      }
        ).catch((error) => {
            console.log(error);
          }
        )
    }
    fetchData();
  },[]); 

  const HeaderCases = (props) => (
    <View {...props}>
      <Text category='h6'>Coronavirus cases</Text>
    </View>
  );
  const HeaderDeath = (props) => (
    <View {...props}>
      <Text category='h6'>Deaths</Text>
    </View>
  );
  const HeaderRecovered = (props) => (
    <View {...props}>
      <Text category='h6'>Recovered</Text>
    </View>
  );

    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark}}>
        <SafeAreaView style={{flex: 1}}>
         <React.Fragment>
            <View style={{ flex: 1,marginTop:50 }}>
          <Text style={{padding:10,color:'black' }}>Global Coronavirus information</Text>
         <Card style={styles.card} 
         header={HeaderCases}>
      <Text >
        {GlobalStat.cases}
      </Text>
    </Card>
    <Card style={styles.card} 
         header={
           HeaderDeath}>
      <Text >
      {GlobalStat.deaths}
      </Text>
    </Card>
    <Card style={styles.card} 
         header={
           HeaderRecovered}>
      <Text >
      {GlobalStat.recovered}
      </Text>
    </Card>
    </View>
    <Button
    style={{backgroundColor:'black'}}
    onPress={()=>navigation.navigate('StatCountriesScreen')}
    >   <Text>See countries</Text>
    </Button>
    </React.Fragment>
    </SafeAreaView>
    </ApplicationProvider>
    
         
    );
  }
  
  
 
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    margin: 10,
    height:130,
    
    
  },
});
export default StatistiqueScreen
