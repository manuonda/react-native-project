import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Product from '../screens/product';

/**
 * Stack Navigator Tabs
 */
export type ShopStackParamList = {
   Categories: undefined,
   Products: undefined,
   Product: undefined, 
}

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopStack() {
    return(
        <Stack.Navigator
      
          initialRouteName='Categories'
          screenOptions={{
              
            headerStyle: {
                backgroundColor: '#8bb5bb'
            },
            headerBackTitleVisible:false,
            headerTitleStyle :{
              color: '#fff',
              fontWeight: '600'    
            },
            headerTintColor: '#fff',
        }}
       >
            <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
            <Stack.Screen name="Products" component={Products}></Stack.Screen>
            <Stack.Screen name="Product" component={Product}></Stack.Screen>
        </Stack.Navigator>
    )
}