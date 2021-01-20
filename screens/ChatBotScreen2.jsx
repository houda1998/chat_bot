import React, { useCallback, useEffect, useState } from 'react'
import { View,Text,SafeAreaView, Linking } from 'react-native'
import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import ChatBot, { Loading } from 'react-native-chatbot';
import api from "../api"
import axios from 'axios';


const  baseURL="https://ai-chatbot-server.herokuapp.com/";


function ChatBotScreen() {
const [Mesmessage, setMessage] = useState("");
const [loading,setloading]=useState(true)
var msg="";
useEffect( () =>  {
  axios.get(`https://ai-chatbot-server.herokuapp.com/message`)
  .then(response =>{
   setMessage(response.data.message) 
   setloading(false)
  })
  .catch((error) => {
    console.log(error);
    setloading(true)
  })
},[Mesmessage]); 

// const  ChatbotResponse= async(previewMessage) =>{
//  try{
//   const resp= await axios.post(baseURL+'message',{"message":previewMessage})
//      Monmessage=resp.data.message
//      setMessage(Monmessage)
//      setloading(false)
//      return Monmessage
//    }
//  catch{err => { 
//    console.log(err)
//  }}
// return Monmessage
// }

// const  ChatbotResponse= (previewMessage) =>{
//    axios.post(baseURL+'message',{"message":previewMessage})
//   .then(
//     resp => 
//     { 
//       let Monmessage=resp.data.message
//       console.log(Monmessage)
//       setloading(false)
//       setMessage(Monmessage)
//     })
//   .catch(err => { 
//   })

//  }
 const  ChatbotResponse= (previewMessage) =>{
  axios.post(baseURL+'message',{"message":previewMessage})
 .then(resp =>
  {   
    setMessage(resp.data.message)
    msg=resp.data.message
    return resp.data.message;
  }
   )
   .catch(err => { 
   return "wait";
 })

}
// const getMessage= async (previewMessage)=>{
//    Monmessage= await ChatbotResponse(previewMessage);
// }
if(!loading) {
 return (
<ApplicationProvider {...eva} theme={eva.light}>
                  <SafeAreaView style={{ flex: 2 ,marginTop : 100  }}>
                  <ChatBot  
                    recognitionEnable={true} 
                    steps={[
                      {
                        id:'0',
                        message: Mesmessage,
                        trigger: '1',
                      },
                      {
                        id: '1',
                        user: true,
                        trigger: ({ value, steps })=>{
                          if(ChatbotResponse(value)!=undefined)
                          return "2"
                          else {
                            Monmessage=msg;
                            if(Monmessage!="" && Monmessage!=undefined)
                            return "2"
                            else return "3"
                          }
                        },
                         
                      
                      },
                      {
                        id: '2',
                        message: ({ previousValue, steps }) =>  { 
                          let Monmessage=ChatbotResponse(previousValue)
                           console.log(Monmessage)
                          setloading(false)
                               return Mesmessage
                         },
                         trigger: '1'
                      },
                      {
                        id: '3',
                        delay:20000,
                        message: ({ previousValue, steps }) =>  { 
                              if(ChatbotResponse(previousValue)!=undefined && ChatbotResponse(value)!="")
                              return ChatbotResponse(value)
                               else return Mesmessage
                         },
                         trigger: '1'
                      },
                    
                    
                      
                      
                   
                     
                      
                    ]}

//                     steps={[
//                       {
//                         id: '1',
//                         message: 'مرحبا بيك 😄، كفاش نقدرنعاونك  ؟\nتقدر تسولني على عدد الحالات فالمغرب و عن بعض الأسئلة العامة المتعلقة كورونا.',
//                         trigger: '2',
//                       },
//                       {
//                         id: '2',
//                         user:true,
//                         trigger: '3' 
                          
                       
//                       },
//                       {
//                         id: '3',
//                         component:
//                         (
//                             <View>
//                               <Text>فيروس كورنا هو فيروس حيواني المص44در، الى مهتم تعرف كثر على طبيعة الفيروس شوف‘</Text>
//                               <Text 
//                               style={{fontSize:20,color:'blue'}}
//                               onPress={ ()=>{ Linking.openURL('http://www.emro.who.int/ar/health-topics/corona-virus/questions-and-answers.html')}}
//                               >هنا</Text>
//                             </View>
//                         ),  
//                         trigger: '4',
//                       },
//                       {
//                         id: '4',
//                         user:true,
//                         trigger: '5' 
                          
                       
//                       },
//                       {
//                         id: '5',
//                         message: 'مرحبا فأي وقت، الى عند شي سؤال اخر مترددش',
//                        trigger:'6'
//                       },
//                       {
//                         id: '6',
//                         user:true,
//                         trigger: '7' 
                          
//                       },
//                       {
//                         id: '7',
//                         message: "مع السلامة ❤️ ، و قبل متمشي بغيت نقولك بقا فدارك، ويلا احتاجيتي أي حاجة فأي وق مرحبا.",
//                         end:true,
//                       },

//                     ]}
                    
// />

                	/>  
                
                                       
                 </SafeAreaView>
      </ApplicationProvider>
 )
    }
    else{
      return(
        <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{flex: 2,paddingTop:30}}>
        <View style={{flex: 1,
      justifyContent: 'center',
      alignItems:'center'}}>
        <Text>Veuillez patienter...</Text>
          <Spinner size="large"/>
          </View>
          </SafeAreaView>
          </ApplicationProvider>
      )
    } 
      
        
    
}

export default ChatBotScreen
