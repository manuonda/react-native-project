
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CodeQR from '../screens/codeqr';
import Login from '../screens/login';
import Tareas from '../screens/tarea/tareas';
import 'react-native-gesture-handler';
import { HomeStackParamList } from './home';



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
   
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;