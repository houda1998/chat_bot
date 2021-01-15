import React, { useState,useEffect } from 'react'
import { ApplicationProvider, Button, Text,Card,Divider} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Linking,StyleSheet,Image,View,ScrollView} from "react-native";
import * as eva from '@eva-design/eva'
import {newsApi} from "../api.jsx"

function NewsScreen() {

 
    const [news,setnews]=useState([])
    const [loading,setloading]=useState([])
    useEffect( () =>  {
        setloading(true)
        const fetchData=()=>{
          newsApi.get().
          then(response=> {
          setnews(response.data.articles);
          console.log(news)
          }
            ).catch((error) => {
                console.log(error);
              }
            )
            setloading(false)
        }
        
        fetchData();
      },[]); 


      
      const Myheader= ({news,...rest}) =>( 
        <View {...rest} >
        <Text category='h6' >{news.title}</Text>
      </View>
      )
      
      const Footer = ({news,props}) => (
        <View {...props} style={[ styles.footerContainer]}>
                  <Button
                    style={styles.footerControl}
                    size='small'
                    appearance='outline'
                    status='success'
                    onPress={ ()=>{ Linking.openURL(news.url)}}>
                    Plus d'information
                  </Button>
                </View>

      );
    
    return (
          <SafeAreaView style={{flex: 1,backgroundColor:"#23b574"}}>
          <Text category="h1" style={{color:"white"}}>Dernière nouvelles</Text>
          <ScrollView>
          { 
          news &&  news.filter(e => e.content !== null).map((n,i)=>(
             
              <Card style={styles.card} key={i}  footer={(props)=><Footer news={n}  />}>
               
               {n.urlToImage!=null? <Image style={styles.image} source={{uri:n.urlToImage}}/>
               :<Image style={styles.image} source={{uri:'https://www.libe.ma/photo/art/default/24898170-26471856.jpg?v=1535287851'}} />}
               <Text>
                {n.title}
               </Text>
             </Card>  
                     )
                )}
          </ScrollView>
    </SafeAreaView>
    
    )
}
const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 2,
      margin: 2,
      backgroundColor:"#353d2f",
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footerControl: {
      marginHorizontal: 2,
      
    },
    image: {
      width: "100%",
      height: 100,
    },
  });

export default NewsScreen
