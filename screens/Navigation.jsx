import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './HomeScreen';
import { Drawer } from '@ui-kitten/components';
import Signup from './Signup';
import LogIn from './Login';
import StatistiqueScreen from './Statistiques';
import StatCountriesScreen from './StatCountriesScreen';
import Dashbord from './DashbordScreen';
import NewsScreen from './NewsScreen';
import chartsScreen from './chartsScreen';
import mapScreen from './mapScreen';
const { Navigator, Screen } = createStackNavigator();
const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Login' component={LogIn}/>
    <Screen name='Signup' component={Signup}/>
    <Screen name='Statistiques' component={StatistiqueScreen}/>
    <Screen name='StatCountriesScreen' component={StatCountriesScreen}/>
    <Screen name='news' component={NewsScreen}/>
    <Screen name='chartsScreen' component={chartsScreen}/>
    <Screen name='mapScreen' component={mapScreen}/>
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
