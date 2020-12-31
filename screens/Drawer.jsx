import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';



const { Navigator, Screen } = createDrawerNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const ChatBotScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>CovidBot</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='Users' />
    <DrawerItem title='covidBot' />
  </Drawer>
);
function DrawerScreen() {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    return (
      <Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Screen name='Users' component={UsersScreen}/>
      <Screen name='ChatBotScreen' component={ChatBotScreen}/>
    </Navigator>
    )
}

export default DrawerScreen
