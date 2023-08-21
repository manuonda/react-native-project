import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home';
import About from '../screens/about';


export type RootStackParamLis = {
  Home:undefined,
  About: {name: string},
}

const Stack = createNativeStackNavigator<RootStackParamLis>();

export default function MainStack() {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#EC5B70'
            },
            headerBackTitleVisible:false,
            headerTitleStyle :{
              color: '#fff',
              fontWeight: '600'    
            },
            headerTintColor: '#fff',
        }}
        >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="About" component={About}></Stack.Screen>
    </Stack.Navigator>
  )
}