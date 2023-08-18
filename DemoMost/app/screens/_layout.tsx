import { Stack } from "expo-router";

export default function (){
    return (<Stack
            screenOptions={{
                headerShown:true
            }}
           >
          
          <Stack.Screen name="register" 
           options={{
            title:'Register',
            headerShown:false
           }}
          />
            <Stack.Screen name="login" 
           options={{
            title:'Login',
            headerShown:false
           }}
          />
        
     
        </Stack>)
}