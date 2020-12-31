import React from 'react'
import { ApplicationProvider, Button, Text,Card,View } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Linking,StyleSheet,Image} from "react-native";
import * as eva from '@eva-design/eva'
import {newsApi} from "../api.jsx"
import { useState,useEffect } from 'react';

function NewsScreen() {
    const [news,setnews]=useState([])
    const [loading,setloading]=useState([])
    useEffect( () =>  {
        setloading(true)
        const fetchData=()=>{
          newsApi.get('/top-headlines?country=ma&q=covid&sortBy=publishedAt&apiKey=04f4ae3f5bd344c78d1d1aa5961a86cf').
          then(response=> {
          setnews(response.data.articles);
          }
            ).catch((error) => {
                console.log(error);
              }
            )
            setloading(false)
        }
        
        fetchData();
      },[]); 
    
    return (
        <ApplicationProvider {...eva} theme={{ ...eva.dark}}>
          <SafeAreaView style={{flex: 1}}>
        {
            news.map((n)=>(
     <Card style={styles.card}
      header={
      <View >
      <Text category='h6'>{n.title}</Text>
      <Text category='s1'>{n.description}</Text>
      <Image
      source={{uri:n.urlToImage}}
      />
    </View>}
       footer={
        <View  style={ styles.footerContainer}>
        <Button
          style={styles.footerControl}
          size='small'
          onPress={ ()=>{ Linking.openURL(n.url)}}>
          Plus de detail
        </Button>
      </View>
       }>
      <Text>
       {n.content}
      </Text>
    </Card>  
            ))
      
        }
       
    </SafeAreaView>
    </ApplicationProvider>
    
    )
}
const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 1,
      margin: 2,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
  });

export default NewsScreen
