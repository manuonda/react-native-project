import { Stack } from "expo-router"

export default () => {
    return (
          <Stack>
            <Stack.Screen name="index" options={{
                headerShown : false,
            }}></Stack.Screen>
            <Stack.Screen name="message" options={{
                headerShown:false
            }} ></Stack.Screen>
          </Stack>
    )
}