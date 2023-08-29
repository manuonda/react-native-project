import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBarButtonProps, BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './shop';
import DrawerNavigator from './drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FCECC9',
    borderTopRightRadius: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
   labelContainer :{
    //flex:1,
    
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 15,
   },
  label: {
    fontWeight: '400',
    fontSize: 11,
  }
});


const homeIcon = require('../../assets/images/casa.png');
const shopIcon = require('../../assets/images/compras.png');


const Tab = createBottomTabNavigator();

// { paddingBottom: insets.bottom }

const TabBar = ({ state, descriptors, navigation, insets }: BottomTabBarProps) => {
  return (
    <View style={[styles.tabBar , {paddingBottom: insets.bottom}]}>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label : string |undefined | any = options.tabBarLabel !== undefined ?
            options.tabBarLabel :
            options.title !== undefined ?
              options.title : route.name;
           // el estado de la ruta es la del index    
           const isFocused = state.index === index;
           const onPress = () => {
            const event = navigation.emit({
               type:'tabPress',
               target: route.key,
               canPreventDefault: true,  
            });
              
             // navigation route
             if (!isFocused && !event.defaultPrevented) {
               navigation.navigate(route.name);
             }
           
           } //end onPress

           const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return(
            <TouchableOpacity 
               accessibilityRole="button"
               accessibilityState={isFocused ? { selected: true } : {}}
               accessibilityLabel={options.tabBarAccessibilityLabel}
               testID={options.tabBarTestID}
               onPress={onPress}
               onLongPress={onLongPress}
               style={styles.labelContainer}
               key={route.key}>
            <Text style={[styles.label, {color: isFocused? "#2D3142" :"#E0E0E0"}]}>
                 {label}
            </Text>
            </TouchableOpacity>
           )

        })
      }
    </View>
  )
}
export default function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='MainStack'
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        //headerTitle: 'Shop',
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 11,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: '#EC5B70',
        tabBarInactiveTintColor: '#212121'
      }}
      >
      <Tab.Screen
        name="DrawerStack" component={DrawerNavigator}
        options={{
          title: 'Home'
        }}
      //  options={{
      //   tabBarLabel:"Home",
      //   headerTintColor: 'blue',         
      //   tabBarIcon: ({ focused, color, size }) => {
      //       return <Ionicons name={focused?'home':'home-outline'} size={24} color="black" /> 
      //   },

      //  }}
      />

      <Tab.Screen name="ShopStack" component={ShopStack}
       options={{
        title:'Shop'
       }}
      // options={{
      //   tabBarLabel:"Shop",
      //   headerTintColor: 'blue',         
      //   tabBarIcon: ({ focused, color, size }) => {
      //      return <Ionicons name={focused?'home':'home-outline'} size={24} color="black" /> 
      //   },


      // }}
      />
    </Tab.Navigator>
  )
}