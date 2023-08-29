import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from "react-native-paper"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import CodeQR from './src/screens/codeqr';
import RootNavigation from './src/navigation';


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
