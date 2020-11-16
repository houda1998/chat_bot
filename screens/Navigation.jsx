import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './HomeScreen';
import  DetailsScreen  from './DetailsScreen';
import { Drawer } from '@ui-kitten/components';
import Signup from './Signup';
import LogIn from './Login';
import Statistques from './Statistques';
const { Navigator, Screen } = createStackNavigator();
const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
    <Screen name='Login' component={LogIn}/>
    <Screen name='Signup' component={Signup}/>
    <Screen name='Statistiques' component={Statistques}/>
  </Navigator>
);
function AppNavigation() {
   
    return (
        <NavigationContainer>
          <HomeNavigator/>
  </NavigationContainer>
    )
}

export default AppNavigation
