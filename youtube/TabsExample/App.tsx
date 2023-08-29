import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';
//import { Provider } from "react-redux"

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})

export default function App() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
    <GestureHandlerRootView style={styles.container}>
      <RootNavigator />
    </GestureHandlerRootView>
    
    </Provider>
    </SafeAreaProvider>

    );
}

