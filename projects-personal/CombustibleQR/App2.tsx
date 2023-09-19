import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detalle" component={Detalle} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={StackScreen} />
  </Drawer.Navigator>
);

const CustomHeader = ({ navigation, route }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
      onPress={() => navigation.toggleDrawer()}
    >
      <Ionicons name="ios-menu" size={30} color="black" />
      <Text style={{ marginLeft: 10, fontSize: 18 }}>{route.name}</Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => (
  <Screen>
    <ScreenComponentOptions
      headerLeft={() => (
        <CustomHeader navigation={navigation} route={navigation.route} />
      )}
    />
    {/* Resto del contenido */}
  </Screen>
);

const Detalle = ({ navigation }) => (
  <View>
    <ScreenComponentOptions
      headerLeft={() => (
        <CustomHeader navigation={navigation} route={navigation.route} />
      )}
    />
    {/* Resto del contenido */}
  </View>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;