import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CargaConductor from "../screens/carga/conductor/carga.conductor";
import CargaVehiculo from "../screens/carga/vehiculo/carga.vehiculo";
import Cargas from "../screens/carga/cargas";
import { CardActionsProps } from "react-native-paper";

type CargaParamList = {
  Conductor: undefined,
  Vehiculo: undefined
}


const CargaStack = createNativeStackNavigator<CargaParamList>();

export default function CargaStackNavigation() {
  return(
    <CargaStack.Navigator 
     screenOptions={{
        
     }} 
    >
      <CargaStack.Screen name="Conductor"  component={CargaConductor}/>
      <CargaStack.Screen name="Vehiculo"  component={CargaVehiculo} />
     </CargaStack.Navigator>
  )
  
}