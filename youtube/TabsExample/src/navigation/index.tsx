import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";
import AuthStack from "./auth";


export default function RootNavigator(){
    const user = null;
    console.log("user is null");
    return(
        <NavigationContainer>
          { user ? <TabsNavigator/> : <AuthStack/>} 
        </NavigationContainer>
    )
}