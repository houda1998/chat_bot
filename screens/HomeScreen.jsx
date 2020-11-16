import React from 'react'
import { SafeAreaView,View,Image, StyleSheet  } from 'react-native';
import { Button, Divider, TopNavigation } from '@ui-kitten/components';

function HomeScreen({navigation}) {
  const styles = StyleSheet.create({
    logo: {
      width: 30,
      height: 58,
    },
    Button: {
      margin :5,
      width:150 
    }
  });
  
    return (
        <SafeAreaView style={{ flex: 2 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <View style={{backgroundColor: '#353d2f',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View >
      <Image
       style={styles.Logo}
        source={require('./assets/Mycovid.png')}
      />
      <Image/>
      </View>
      <View >
      
      <Button
      style={styles.Button}
      appearance='outline'
        onPress={() => navigation.navigate('Login')}
        title="login"
        status='success'
      >Se connecter </Button>
        <Button
         style={styles.Button}
         appearance='outline'
        onPress={() => navigation.navigate('Signup')}
        title="Signup"
        status='success'
      >S'inscrire</Button>
    </View>
    </View>
    </SafeAreaView>
    )

}

export default HomeScreen
