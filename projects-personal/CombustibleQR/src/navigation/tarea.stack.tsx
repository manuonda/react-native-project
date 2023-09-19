import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


import React from 'react'
import Tarea from '../screens/tarea/tarea';
import Tareas from '../screens/tarea/tareas';
import { Button } from 'react-native';


export type TareasStackParamList = {
  Tareas: undefined,
  Tarea: undefined,
}


const TareaStack = createNativeStackNavigator();


export const TareasStackNavigation = () => {
  return (
    <TareaStack.Navigator
      screenOptions={{ headerShown: true }}
    >
      <TareaStack.Screen name="Tareas" component={Tareas}
        options={{
          headerTitle: 'Tareas',
          headerShown: true,
          statusBarColor:'#7986CB',
          headerStyle: {
            backgroundColor:'#7986CB'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontWeight:'400'
          } 

        }}
      />
      <TareaStack.Screen name="Tarea" component={Tarea}
        options={{
          headerTitle: 'Tarea',
          headerShown: true,
          statusBarColor:'#7986CB',
          headerStyle: {
            backgroundColor:'#7986CB'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontWeight:'400'
          } 

        }}
      />
    </TareaStack.Navigator>
  )
}




