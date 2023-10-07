import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigation from './home';



const RootNavigation = () =>  {
  return (
    <NavigationContainer>
       <HomeStackNavigation />
    </NavigationContainer>

  )
}
export default RootNavigation
