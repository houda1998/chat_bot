import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigation from './screens/Navigation';
export default function App() {
    return ( 
      <>
     <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigation/>
    </ApplicationProvider>
  </>
 
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 128,
        flexDirection: 'row',
        alignItems: 'center',
      },
});