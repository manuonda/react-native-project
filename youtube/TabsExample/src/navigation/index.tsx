import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";


export default function RootNavigator(){
    return(
        <NavigationContainer>
         <TabsNavigator/>
        </NavigationContainer>
    )
}