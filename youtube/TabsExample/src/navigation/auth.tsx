import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/sign-in';
import SingUp from '../screens/sign-up';
import SingOut from '../screens/sign-up';

 type AuthParamList =  {
    SignIn: undefined,
    SingUp: undefined,
}

const Stack = createNativeStackNavigator<AuthParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#606d5d'
        },
        headerTitleStyle:{
          fontWeight:'600',
          color:'#fff'
        },
        headerShown:false
      }}>
        <Stack.Screen name='SignIn' component={SignIn} 
         options={{
          title:'Acceso Sistema',
          
         }}
        />
        <Stack.Screen name='SingUp' component={SingOut}/>
    </Stack.Navigator>
  )
}