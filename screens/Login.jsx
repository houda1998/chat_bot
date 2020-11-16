import React from 'react'
import { SafeAreaView,View, Text  } from 'react-native';

import { Button, Divider, TopNavigation } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';
const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );
  
function LogIn({navigation}) {
    const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
      placeholder='Pseudo/email'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Input
      value={value}
      label='Mot de passe'
      placeholder='Mot de passe'
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Button  onPress={() => navigation.navigate('Statistiques')}
        title="Se connecter"> Se connecter</Button>
      </View>
      </SafeAreaView>
    )
}

export default LogIn
