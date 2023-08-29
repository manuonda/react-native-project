import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import {Drawer, PaperProvider} from "react-native-paper"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';
import  { TareasStackNavigation } from './tareas.stack';


const RootNavigation = () =>  {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>

  )
}
export default RootNavigation

const styles = StyleSheet.create({})