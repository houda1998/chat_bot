import React from 'react'
import { SafeAreaView,View,TouchableWithoutFeedback } from 'react-native';
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
        <SafeAreaView style={{ flex: 2 }}>
        <TopNavigation title='MyApp' alignment='center'/>
        <Divider/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
      placeholder='Pseudo'
      label='Pseudo'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
     <Input
     label='Email'
      placeholder='email'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
     <Datepicker
    style={{  alignSelf: 'stretch',}}
    label='Date de naissance'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
    <Input
      value={value}
      label='Mot de passe'
      caption='Doit contenir 8 characteres'
      placeholder='Mot de passe'
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
   
    <Button  onPress={() => navigation.navigate('Login')}
        title="S'inscrire'">S'inscrire</Button>
      </View>
      </SafeAreaView>
    )
}

export default Signup
