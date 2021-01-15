import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {LineChart,PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {  Text } from '@ui-kitten/components';

const localeString=(x) =>{
  if(x!=null && x!=undefined)
  return x.toLocaleString('en-GB');
}
function chartsScreen({route}) {
    const item  = route.params;
    const screenWidth = Dimensions.get("window").width;
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
    const fetchDataConfirmed=(country)=>{
        console.log("this is my data"+ country.name)
        if(country!=null && country!=undefined){
          let mydataCases=[]
          let mydataDeath=[]
          let mydataRecovered=[]
          let mydate=[]
          let j=0
          country && country.timeline.map((d,i)=>{
              if(j!=10){
            mydataCases.push(Number(d.new_confirmed))
             mydate.push(d.date)
             mydataDeath.push(Number(d.new_deaths))
             mydataRecovered.push(Number(d.new_recovered))
            j=j+1
           
              }
          },)
          const mydata={
            labels: mydate.reverse(),
            datasets: [
              {
                data: mydataCases.reverse(),
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              },
              {
                data: mydataDeath.reverse(),
              strokeWidth: 2 // optional
              },
              {
                data: mydataRecovered.reverse(),
                color: (opacity = 1) => `rgba(255, 234, 112, ${opacity})`, // optional
              strokeWidth: 2 // optional
              }
            ],
            legend: ["Confirmé","Décès","Guéris"] // optional
          }
          return mydata
        }
        
      }
      const fetchDataLatest=(country)=>{
        if(country!=null && country!=undefined){
            const data = [
                {
                  name: "Décès",
                  cas: Number(country.latest_data.deaths),
                  color: "green",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15
                },
                {
                  name: "Guéris",
                  cas: Number(country.latest_data.recovered),
                  color: "rgba(255, 234, 112, 1)",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15
                },
                {
                    name: "Critique",
                    cas: Number(country.latest_data.critical),
                    color: "rgba(255, 0, 0, 1)",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                }
            
            ]
          
            return data

          }
          
        }
        
      
      
    return (
        <SafeAreaView style={{flex: 2,paddingTop:30,backgroundColor:"#353d2f"}}>
        <View style={{backgroundColor:"#353d2f"}}>
        <Text category='h6' style={{color:"#22B371",fontFamily:"serif",fontSize:20,textAlign:'center'}}>{item.country.item.name}</Text>
        <LineChart
        data={fetchDataConfirmed(item.country.item)}
        width={screenWidth}
                      height={300}
                      verticalLabelRotation={30}
                      chartConfig={chartConfig}
                      bezier
                        />
<Text category='h6' style={{color:"#22B371",fontFamily:"serif",fontSize:20}}>Total des Cas: {localeString(item.country.item.latest_data.confirmed)}</Text>
        <PieChart
         data={fetchDataLatest(item.country.item)}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"cas"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  avoidFalseZero
  
/>
            </View>
            </SafeAreaView>
    )
}

export default chartsScreen
