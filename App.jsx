import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View,AppRegistry, SafeAreaView } from 'react-native';
import { ApplicationProvider, IconRegistry,TopNavigation,Divider  } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigation from './screens/Navigation';
import { default as theme } from './MyTheme.json'; 
export default function App() {
    return ( 
      <SafeAreaView style={{ flex: 1 }}>
     <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <AppNavigation/>
    </ApplicationProvider>
  </SafeAreaView>
 
    );
}


