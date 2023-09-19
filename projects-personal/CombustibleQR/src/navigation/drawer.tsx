
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CodeQR from '../screens/codeqr';
import Login from '../screens/login';
import Tareas from '../screens/tarea/tareas';
import 'react-native-gesture-handler';
import { TareasStackNavigation } from './tarea.stack';

type RootDrawerParamList = {
  TareaStack: undefined;
  Login: undefined;
  CodeQR: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
       initialRouteName='TareaStack'
       screenOptions={{ headerShown:false }}>
      <Drawer.Screen name="TareaStack" component={TareasStackNavigation} 
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