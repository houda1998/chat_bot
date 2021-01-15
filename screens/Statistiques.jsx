import React, { useEffect, useState } from 'react'
import { View,StyleSheet, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  Button, Card, Layout, Text } from '@ui-kitten/components';
import {statApi} from "../api.jsx"
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatBotScreen from './ChatBotScreen.jsx';
import NewsScreen from './NewsScreen.jsx';
import HomeScreen from './HomeScreen.jsx';
import mapScreen from './mapScreen.jsx';
function StatistiqueScreen({ navigation }) {
  const [GlobalStat, setGlobalStat] = useState([]);
  useEffect( () =>  {
    const fetchData=()=>{
      statApi.get('/all').
      then(response=> {
      console.log(response.data)
      setGlobalStat(response.data);
      }
        ).catch((error) => {
            console.log(error);
          }
        )
    }
    fetchData();
  },[]); 
  const localeString=(x) =>{
    if(x!=null && x!=undefined)
    return x.toLocaleString('en-GB');
}
const data = {
  labels: ["Aujourd'huit", "Test2"],
  legend: ["L1", "L2", "L3"],
  data: [
    [60, 60, 60],
    [30, 30, 60]
  ],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};
  const HeaderCases = (props) => (
    <View {...props}>
      <Text category='h6' style={{color:"#E6452C",fontFamily:"serif",fontSize:20}}>Cas confirmés</Text>
    </View>
  );
  const HeaderDeath = (props) => (
    <View {...props}>
      <Text category='h6' style={{color:"black",fontFamily:"serif",fontSize:20}}>Décès</Text>
    </View>
  );
  const HeaderRecovered = (props) => (
    <View {...props}>
      <Text category='h6' style={{color:"#22B371",fontFamily:"serif",fontSize:20}}>Guéris</Text>
    </View>
  );

    return (
     
        <SafeAreaView style={{backgroundColor:"#23b574",flex:1 }}>
         <React.Fragment>
         <Image
        source={require('./assets/covid_people2.png')}
      />
            <View style={{flex:1}}>
          <Text style={{padding:10,fontFamily: "serif",fontSize:20 }}>Statistiques des cas du monde</Text>
          <Layout style={styles.topContainer} level='1'>
        <Card style={styles.card} 
         header={
           HeaderDeath}>
      <Text style={{color:"black",fontFamily:"serif",fontSize:20}}>
      {localeString(GlobalStat.deaths)}
      </Text>
    </Card>
    <Card style={styles.card} 
         header={
           HeaderRecovered}>
      <Text style={{color:"#22B371",fontFamily:"serif",fontSize:20}}>
      {localeString(GlobalStat.recovered)}
      </Text>
    </Card>
</Layout>
        <Card style={styles.card} 
         header={HeaderCases}>      
      <Text style={{color:"#E6452C",fontFamily:"serif",fontSize:20}} >
        {localeString(GlobalStat.cases)}
      </Text>
    </Card>
    
    </View>
    <Button
      style={{backgroundColor:"#73EAB4",border:"2 solid black"}}
    onPress={()=>navigation.navigate('StatCountriesScreen')}
    >   <Text style={{fontSize:20}}>Statistiques par pays</Text>
    </Button>
    </React.Fragment>
    </SafeAreaView>
    
         
    );
  }
  const Drawer = createDrawerNavigator();

function Statistiques() {
    return (
        <Drawer.Navigator initialRouteName="Statistiques">
          <Drawer.Screen name="Statstiques" component={StatistiqueScreen} />
          <Drawer.Screen name="Chatbot" component={ChatBotScreen} />
          <Drawer.Screen name="news" component={NewsScreen} />
          <Drawer.Screen name="Se deconnecter" component={HomeScreen} />
          <Drawer.Screen name="Sites consultation médicale" component={mapScreen} />
        </Drawer.Navigator>
    )
}
  
 
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    margin: 10,
    backgroundColor:"#73EAB4",
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#23b574"
  },
});
export default Statistiques
