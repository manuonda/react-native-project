import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import About from '../screens/about';
import Logout from '../components/icons/logout';

import HomeIcon from '../components/icons/home';
import AboutIcon from '../components/icons/about';

type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
}
const styles = StyleSheet.create({
  drawerItemLabel: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft:0,
  },
  drawerItemIcon: {
    padding: 0,
    margin: 0,
  },
  drawItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItem: {
    //justifyContent:'flex-start',
   // backgroundColor:'blue',
    padding:0,
    margin:0,
  }
});
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
         style={styles.drawerItem}

        label={() => <Text style={styles.drawerItemLabel}>Logout</Text>}
        icon={() => <Logout height={24}
          style={styles.drawerItemIcon}
          width={24} color="#000000" />}
        onPress={() => console.log("press")}
      />
    </DrawerContentScrollView>

  )
}
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#EC5B70'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: '600'
        },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#EC5B70',
        drawerInactiveTintColor: '#212121',
        drawerInactiveBackgroundColor: '#FFFFFF',
        drawerLabelStyle: {
          fontWeight: '600',
          fontSize: 14
        },
        drawerType: 'back',
      }}
      drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;