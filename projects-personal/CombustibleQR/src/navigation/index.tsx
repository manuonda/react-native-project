import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';
import { TareasStackNavigation } from './tarea.stack';
import HomeStackNavigation from './home';



const RootNavigation = () =>  {
  return (
    <NavigationContainer>
       <HomeStackNavigation />
    </NavigationContainer>

  )
}
export default RootNavigation
