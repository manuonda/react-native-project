import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from "react-native-paper"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import CodeQR from './screens/codeqr';


const Drawer = createDrawerNavigator();

function Feed () {
  return(
    <View>
      <Text>TEXTO 1</Text>
    </View>
  )
}

function Article () {
  return(
    <View>
      <Text>Article</Text>
    </View>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Drawer.Navigator>
       <Drawer.Screen name="ABM" component={Feed}></Drawer.Screen>
       <Drawer.Screen name="Lectura Code QR" component={CodeQR}></Drawer.Screen>
      
    </Drawer.Navigator>
    </NavigationContainer>
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
