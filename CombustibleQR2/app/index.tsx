import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import CodeQR from "./screens/codeqr";

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
export default function Page() {
  return (
    <PaperProvider>
      <Drawer.Navigator>
       <Drawer.Screen name="ABM" component={Feed}></Drawer.Screen>
       <Drawer.Screen name="Lectura Code QR" component={CodeQR}></Drawer.Screen>
      
    </Drawer.Navigator>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
