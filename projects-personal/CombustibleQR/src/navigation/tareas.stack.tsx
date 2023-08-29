import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import React from 'react'
import Tarea from '../screens/tarea/tarea';
import Tareas from '../screens/tarea/tareas';


export type TareasStackParamList = {
  //DrawerNavigation: undefined,
  Tareas:undefined,
  Tarea: undefined,
}


const Stack = createNativeStackNavigator<TareasStackParamList>();


export const TareasStackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Tareas" component={Tareas}/>
        <Stack.Screen name="Tarea"  component={Tarea} />
    </Stack.Navigator>  
   )
}


const styles = StyleSheet.create({})

