import React from 'react'
import { SafeAreaView,View, Image,StyleSheet  } from 'react-native';

import { Button} from '@ui-kitten/components';
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
        <View style={{ backgroundColor: '#353d2f',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
        source={require('./assets/Mycovid.png')}
      />
        <Input
      label="Nom d'utilisateur ou email"
      placeholder='Pseudo/email'
      value={value}
      style={{backgroundColor:"#034C2F",color:"#0DA166"}}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Input
      value={value}
      style={{backgroundColor:"#034C2F"}}
      label='Mot de passe'
      placeholder='Mot de passe'
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
    <Button 
      appearance='outline'
      style={styles.Button}
       onPress={() => navigation.navigate('Statistiques')}
        title="Se connecter"
        status='success'> Se connecter</Button>
      </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
 
  Button: {
    margin :5,
    width:150 
  }
});
export default LogIn
