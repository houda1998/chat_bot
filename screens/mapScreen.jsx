import React, { useEffect, useState } from 'react'
import MapView,{Polyline} from 'react-native-maps';
import * as Location from 'expo-location';
import { View,StyleSheet,SafeAreaView, Text, Dimensions } from 'react-native'
import { Spinner } from '@ui-kitten/components';
import MapViewDirections from "react-native-maps-directions";

const {Marker} = MapView;
function mapScreen() {
    const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
const getLocation=()=>{
    let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location;
  }
 return text;
}
   const  mymarkers =[
  
        {

         id:1,
         title:"Centre de Consultation spécialisées Externes",
         coordinate: {
             latitude: 33.70,
             longitude: -7.38
         }
        },
        {
            id:2,
            title:"Centre de Consultation spécialisées Externes-Hopital haman fetouaki",
            coordinate: {
                latitude: 29.70,
                longitude: -9.73
            }
           },
           {
            id:3,
            title:"Centre de Consultation spécialisées Externes -Ihchach",
            coordinate: {
                latitude: 30.44,
                longitude: -9.59
            }
           },  
           {
            id:4,
            title:"Centre de Consultation spécialisées Externes - rue said hajji",
            coordinate: {
                latitude: 34.25,
                longitude: -6.58
         }
        },
         {
          id:5,
          title:"Centre de Consultation spécialisées Externes - rue said hajji",
          coordinate: {
              latitude: 35.25,
              longitude: -7.58
       }
           },
           {
            id:6,
            title:"Centre de Consultation spécialisées Externes - rue said hajji",
            coordinate: {
                latitude: 35.25,
                longitude: -7.58
         }
             },
    ]
    const renderSites = () => {
          const renderedSites = mymarkers.map(site => {  
              return (
                  <Marker
                      key={site.id}
                      title={site.title}
                      coordinate={site.coordinate}
                      image={require('./assets/hopitale.png')}
                  />
              );
          });
  
          return renderedSites;
      };
      const closeDistance=()=>{
          if(getLocation()!="Wating..")
          {
              let arr=[]
              let dist=0
          mymarkers.map(loc=>{
              dist=Math.pow(Math.pow(loc.coordinate.latitude-getLocation().coords.latitude,2)+Math.pow(loc.coordinate.longitude-getLocation().coords.longitude,2), 0.5)
              arr.push(dist)
          });

          arr.sort(function(a, b) {
            return a - b;
        })
              return arr[0]
         }
}
const closeMarker=()=>{
    if(getLocation()!="Wating..")
          {
              let dist=0
              let mark={latitude:0,longitude:0}
          mymarkers.map(loc=>{
              dist=Math.pow(Math.pow(loc.coordinate.latitude-getLocation().coords.latitude,2)+Math.pow(loc.coordinate.longitude-getLocation().coords.longitude,2), 0.5)
              if(dist==closeDistance()){
                  mark.latitude=loc.coordinate.latitude
                  mark.longitude=loc.coordinate.longitude
                  return mark;
              }
          });
         }
}
if(getLocation()=="Waiting.."){
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
}
    return (
        <View style={styles.container}>
        <MapView 
         style={styles.map} 
        initialRegion={{
            latitude: getLocation().coords.latitude,
            longitude: getLocation().coords.longitude,
            latitudeDelta: 0.04,
    longitudeDelta: 0.05,
          }}
        >
        <MapViewDirections
    origin={getLocation().coords}
    destination={{latitude : 34.02712831620547, longitude: -6.753770468785581}}
    apikey="AIzaSyCHrSWViKaeJiTdzdfcPb9r6h5VzuEW9YE"
  />
      <Marker
      key="0"
      title="Ma position"
      coordinate={{latitude: getLocation().coords.latitude,
        longitude: getLocation().coords.longitude}}  
      />
      {renderSites()}
        </MapView>
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
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default mapScreen
