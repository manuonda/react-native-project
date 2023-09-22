import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from "react-native-paper"
import RootNavigation from './src/navigation';
import { useEffect } from 'react';
import { DatabaseConnection, initAutogenerate } from './src/database/connection';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/drawer';

const Drawer = createDrawerNavigator();
const connection = DatabaseConnection.getConnection();
const db2 = initAutogenerate();
export default function App() {
  
  useEffect(( )  =>{
    console.log(connection.version);
    console.log("Connect db");
  },[]);

  return (
    <PaperProvider>
     <RootNavigation />
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
