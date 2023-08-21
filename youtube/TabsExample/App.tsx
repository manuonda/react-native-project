import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation';


export default function App() {
  return (
     <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

