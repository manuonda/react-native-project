import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from "react-native-paper"
import RootNavigation from './src/navigation';
import { useEffect } from 'react';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  
  useEffect(( )  =>{
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
