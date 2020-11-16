import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import  ChatBotScreen  from './ChatBotScreen';
import HomeScreen from './HomeScreen';
function StatistiqueScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Statistique')}
          title="Go to statistque"
        />
      </View>
    );
  }
  
  
  const Drawer = createDrawerNavigator();
  
function Statistques() {
    return (
        <Drawer.Navigator initialRouteName="Statistique">
          <Drawer.Screen name="Statistique" component={StatistiqueScreen} />
          <Drawer.Screen name="Chatbot" component={ChatBotScreen} />
          <Drawer.Screen name="Se deconnecter" component={HomeScreen} />
        </Drawer.Navigator>
    )
}

export default Statistques
