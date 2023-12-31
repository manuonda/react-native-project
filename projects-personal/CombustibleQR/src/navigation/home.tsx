import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./drawer";
import CargaConductor from "../screens/carga/carga.conductor";
import CargaStackNavigation from "./carga.stack";
import CargaVehiculo from "../screens/carga/carga.vehiculo";
import CargaCombustible from "../screens/carga/carga.combustible";


export type HomeStackParamList = {
    DrawerNavigation: undefined,
    Tareas: undefined,
    Tarea: { id: string, image: string },
    CodeQR: undefined,
    Login: undefined,
    Conductor: { id: string, image: string },
    Vehiculo: undefined,
    CargaStack:undefined,
    CodeQR2: undefined,
    CargaCombustible: undefined,
    Cargas:undefined,
}


const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigation() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
                options={{
                    headerShown: false
                }}
            />
           

            <HomeStack.Screen name="Conductor" component={CargaConductor}
                options={{
                    headerTitle: 'Conductor',
                    headerShown: true,
                    statusBarColor: '#7986CB',
                    headerStyle: {
                        backgroundColor: '#7986CB'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '400'
                    }

                }}
            />
            <HomeStack.Screen name="Vehiculo" component={CargaVehiculo}
                options={{
                    headerTitle: 'Vehiculo',
                    headerShown: true,
                    statusBarColor: '#7986CB',
                    headerStyle: {
                        backgroundColor: '#7986CB'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '400'
                    }

                }}
            />

           <HomeStack.Screen name="CargaCombustible" component={CargaCombustible}
                options={{
                    headerTitle: 'Carga Combustible',
                    headerShown: true,
                    statusBarColor: '#7986CB',
                    headerStyle: {
                        backgroundColor: '#7986CB'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '400'
                    }

                }}
            />


           <HomeStack.Screen name="CargaStack" component={CargaStackNavigation}
                options={{
                    headerTitle: 'Conductor',
                    headerShown: true,
                    statusBarColor: '#7986CB',
                    headerStyle: {
                        backgroundColor: '#7986CB'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '400'
                    }

                }}
            />
        </HomeStack.Navigator>
    )
}