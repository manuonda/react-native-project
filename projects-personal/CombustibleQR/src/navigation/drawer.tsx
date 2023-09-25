
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CodeQR from '../screens/codeqr';
import Login from '../screens/login';
import Tareas from '../screens/tarea/tareas';
import 'react-native-gesture-handler';
import { HomeStackParamList } from './home';
import CodeQR2 from '../screens/codqr2';



const Drawer = createDrawerNavigator<HomeStackParamList>();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
       initialRouteName='Tareas'
       screenOptions={{ headerShown:true }}>
      <Drawer.Screen name="Tareas" component={Tareas} 
      />  
      <Drawer.Screen name="Login" component={Login} options={{
        headerShown:true
      }} />
     
    <Drawer.Screen name="CodeQR" component={CodeQR}
      options={{
        headerShown:true
      }}
    />

<Drawer.Screen name="CodeQR2" component={CodeQR2}
      options={{
        title:"Code QR2",
        headerShown:true
      }}
    />
   
 
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;