import React from 'react'
import { SafeAreaView,View,TouchableWithoutFeedback, Image } from 'react-native';
import { Button, Divider, TopNavigation,Datepicker, Layout, Text  } from '@ui-kitten/components';
import { Icon, Input } from '@ui-kitten/components';


const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );
  
function Signup({navigation}) {
    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [date, setDate] = React.useState(new Date());
    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };
  
    const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ backgroundColor: '#353d2f',flex: 1}}>
            <Image
        source={require('./assets/covid_people.jpg')}
        style={{flex: 1,
          width: "100%",
          height: null,
          resizeMode: 'contain'}}
      />
      </View>
           
        <View style={{ backgroundColor: '#353d2f',flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
      placeholder='Nom'
      label='Nom'
      value={value}
      style={{backgroundColor:"#034C2F"}}

      onChangeText={nextValue => setValue(nextValue)}
    />
     <Input
     label='Prenom'
      placeholder='Prenom'
      value={value}
      style={{backgroundColor:"#034C2F"}}
      onChangeText={nextValue => setValue(nextValue)}
    />
     <Input
     label='Email'
      placeholder='email'
      value={value}
      style={{backgroundColor:"#034C2F"}}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Input
      value={value}
      label='Mot de passe'
      caption='Doit contenir 8 characteres'
      placeholder='Mot de passe'
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      style={{backgroundColor:"#034C2F"}}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Button  
     style={{marginTop:20}}
     appearance='outline'
     status='success'
    onPress={() => navigation.navigate('Login')}
        title="S'inscrire'">S'inscrire</Button>
      </View>
      </SafeAreaView>
    )
}

export default Signup
