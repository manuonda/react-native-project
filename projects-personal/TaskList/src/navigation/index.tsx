import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawer';
import { TareasStackNavigation } from './tarea.stack';



const RootNavigation = () =>  {
  return (
    <NavigationContainer>
     <DrawerNavigation />
    </NavigationContainer>

  )
}
export default RootNavigation
