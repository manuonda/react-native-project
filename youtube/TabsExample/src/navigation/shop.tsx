import { View, Text , StyleSheet, TextInput, TextInputFocusEventData, NativeSyntheticEvent, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard} from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Product from '../screens/product';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Search from '../components/icons/search';
const isAndroid = Platform.OS === 'android'

/**
 * Stack Navigator Tabs
 */
export type ShopStackParamList = {
   Categories: undefined,
   Products: undefined,
   Product: undefined, 
}

const styles = StyleSheet.create({
  header: { 
    backgroundColor: '#8D93CE',
    height: 60,
    justifyContent:'center',
    alignItems:'center',
  },
  inputContainer : {
    width:200,
    alignSelf:'center'

  },
  input : {
    backgroundColor:'#fff',
    height: 35,
    paddingVertical: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  searchIcon : {
     position:'absolute',
     top: isAndroid ? 7: 9,
     left: 8
  },
});

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopStack() {
   //me permite la zona segura a partir de que se tiene que separar
   // y no tener que tapar la barra del mobile
   const insets = useSafeAreaInsets();
   console.log(insets);
   const [search, setSearch] = useState<string>("");
   const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
   
   const onChangeText = (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
     setSearch(ev.nativeEvent.text);
   }

   const onFocus  =(ev :  NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsSearchFocused(true);
   }


   const onBlur  =(ev :  NativeSyntheticEvent<TextInputFocusEventData>) => {
     setIsSearchFocused(false);
  }

 
const isAndroid = Platform.OS === 'android'


console.log(isAndroid);
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
            <Stack.Screen name="Categories" component={Categories}
              options={{
                header:() => (
                  <View style={[styles.header,{ marginTop: insets.top}]}>
                    <View style={styles.inputContainer}>
                      <TextInput style={styles.input} 
                        placeholder='Search'
                        value={search} 
                        onChange={onChangeText}
                        onFocus={onFocus}
                        onBlur={onBlur}
                         />
                      <Search 
                        color={isSearchFocused ? "#000000": "#cccccc" } 
                        width={17} height={17} 
                        style={styles.searchIcon}/>
                    </View>
                  </View>
                )
               }}></Stack.Screen>
            <Stack.Screen name="Products" component={Products}></Stack.Screen>
            <Stack.Screen name="Product" component={Product}></Stack.Screen>
        </Stack.Navigator>
    )
}