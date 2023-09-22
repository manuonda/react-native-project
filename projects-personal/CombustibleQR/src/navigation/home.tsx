import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TareasStackNavigation } from "./tarea.stack";
import Tarea from "../screens/tarea/tarea";
import DrawerNavigation from "./drawer";


export type HomeStackParamList = {
    DrawerNavigation: undefined,
    Tareas: undefined,
    Tarea: {id: string, image:string },
    CodeQR: undefined,
    Login: undefined,
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
            <HomeStack.Screen name="Tarea" component={Tarea}
                options={{
                    headerTitle: 'Tarea',
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