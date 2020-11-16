import React, { useCallback, useEffect, useState } from 'react'
import { View,Text,SafeAreaView } from 'react-native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import ChatBot from 'react-native-chatbot';
import api from "../api"
import axios from 'axios';


const  baseURL="http://127.0.0.1:5000/";


function ChatBotScreen() {
const [Mesmessages, setMessages] = useState([]);
useEffect( () =>  {
  console.log("t")
  axios.get(`http://10.0.2.2:5000`)
  .then(response =>{
   setMessages(response.data) 
  })
  .catch((error) => {
    console.log(error);
  })
},[]);  
console.log(Mesmessages)

if(Mesmessages.length>0) {
 return (
<ApplicationProvider {...eva} theme={eva.light}>
                  <SafeAreaView style={{ flex: 2 ,marginTop : 100  }}>
                  <ChatBot         
                 steps={[
                  {
                    id: '0',
                    message: Mesmessages[0].message ,
                    trigger: '1',
                  },
                  {
                    id: '1',
                    user: true,
                    trigger: '2',
                  },
                  {
                    id: '2',
                    message: 'Bye!',
                    end: true,
                  },
                ]}	/> 
                                       
                 </SafeAreaView>
      </ApplicationProvider>
 )
    }
    else{
      return(
  <Text>wait ...</Text>
      )
    } 
      
        
    
}

export default ChatBotScreen
