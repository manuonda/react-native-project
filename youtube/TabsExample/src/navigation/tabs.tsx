import { View, Text } from 'react-native'
import React from 'react'
// react-native-vector-icons/Ionicons otherwise.
import { AntDesign } from '@expo/vector-icons'; 
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './main';
import ShopStack from './shop';



const homeIcon = require('../../assets/images/casa.png');
const shopIcon = require('../../assets/images/compras.png');


const Tab =  createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
        initialRouteName='MainStack'
        screenOptions={{
            headerTitle:'Shop',
            headerShown:false,
            tabBarLabelStyle:{
                fontWeight: '700',
                fontSize: 12,
            },
            tabBarStyle: {
                backgroundColor: '#fff',
            },
            tabBarActiveTintColor: '#EC5B70',
            tabBarInactiveTintColor: '#212121'
        }}>
        <Tab.Screen 
           name="MainStack" component={MainStack} 
           options={{
            tabBarLabel:"Home",
            headerTintColor: 'blue',         
            tabBarIcon: ({ focused, color, size }) => {
                return <Ionicons name={focused?'home':'home-outline'} size={24} color="black" /> 
            },
            
           }}
           />

        <Tab.Screen name="ShopStack" component={ShopStack} 
          options={{
            tabBarLabel:"Shop",
            headerTintColor: 'blue',         
            tabBarIcon: ({ focused, color, size }) => {
               return <Ionicons name={focused?'home':'home-outline'} size={24} color="black" /> 
            },
             
           
          }}
        />
    </Tab.Navigator>
  )
}