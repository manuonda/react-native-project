import { Stack } from "expo-router";
import { PaperProvider  } from "react-native-paper";
export default function RootLayout() {
   return(
    <PaperProvider>
     <Stack>
       <Stack.Screen name="index" options={{ title: "Index"}}></Stack.Screen>
       <Stack.Screen name="search" options={{ title: "Search"}}></Stack.Screen>
     </Stack>
   
    </PaperProvider>
    )
}