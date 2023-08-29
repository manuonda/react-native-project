
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CodeQR from '../screens/codeqr';
import Login from '../screens/login';
import Tareas from '../screens/tarea/tareas';
import { TareasStackNavigation } from './tareas.stack';

type RootDrawerParamList = {
  TareaStackNavigation: undefined;
  Login: undefined;
  CodeQR: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();



const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
     initialRouteName='TareaStackNavigation'
    >
    <Drawer.Screen name="TareaStackNavigation" component={TareasStackNavigation} />
    <Drawer.Screen name="Login" component={Login}/>
    <Drawer.Screen name="CodeQR" component={CodeQR}/>
   
 </Drawer.Navigator>
  )
}

export default DrawerNavigation;