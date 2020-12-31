import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApplicationProvider, Button, Text,Spinner,View } from '@ui-kitten/components';
import { Dimensions } from "react-native";
import {statApi} from "../api.jsx"
import {StyleSheet} from "react-native";


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import HomeScreen from './HomeScreen';
import ChatBotScreen from './ChatBotScreen';
import NewsScreen from './NewsScreen.jsx';
function DashbordScreen({ navigation }) {

    const [GlobalStat, setGlobalStat] = useState([]);
    const [cases, setcases] = useState()
    const [isloading, setloading] = useState(true)
    const screenWidth = Dimensions.get("window").width;
    useEffect( () =>  {
      setloading(true)
      const fetchData=()=>{
        statApi.get('/all').
        then(response=> {
        setGlobalStat(response.data);
        setcases(GlobalStat.cases)
        
        }
          ).catch((error) => {
              console.log(error);
            }
          )
          setloading(false)
      }
      
      fetchData();
    },[]); 
    console.log(response.data)

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
      
      
      const data = [
          {
           name:"cases",
           cases:cases,
           color: "rgba(131, 167, 234, 1)",
           legendFontColor: "#7F7F7F",
           legendFontSize: 15
          },
          {
            name:"deaths",
            cases:100,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name:"recovered",
            cases:100,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          }
      ]
      
  
        if(!isloading ) {
        return  (
          <ApplicationProvider {...eva} theme={{ ...eva.dark}}>
          <SafeAreaView style={{flex: 1}}>
          <PieChart
          data={data}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor={"cases"}
          paddingLeft={"15"}
          center={[10, 50]}
          
        />
         <Button
      style={{backgroundColor:'black'}}
      onPress={()=>navigation.navigate('Statistiques')}
      >   <Text>See numbers</Text>
      </Button>
        </SafeAreaView>
        </ApplicationProvider>
         )
        }
      else if(isloading)
     {
      return (
        <ApplicationProvider>
        <SafeAreaView>
        <View style={styles.loading}>
          <Spinner/>
        </View>
        </SafeAreaView>
        </ApplicationProvider>
      )
     }

}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
  const Drawer = createDrawerNavigator();

function Dashbord() {
    return (
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={DashbordScreen} />
          <Drawer.Screen name="Chatbot" component={ChatBotScreen} />
          <Drawer.Screen name="news" component={NewsScreen} />
          <Drawer.Screen name="Se deconnecter" component={HomeScreen} />
        </Drawer.Navigator>
    )
}

export default Dashbord
