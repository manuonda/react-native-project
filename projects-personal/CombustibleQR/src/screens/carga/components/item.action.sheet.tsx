import { CargaCombustibleService } from "../../../services/carga.combustible.service"
import { useCargaCombustibleStore } from "../../../store"
import { CargaCombustible } from "../../../types/carga.combustible"
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native"
type PropsActionSheet = {
    cargaCombustible: CargaCombustible,
    text: string,
    navigation: any,
    actionSheetRef: any,
    action: string,
    cargas: Array<CargaCombustible>;
}

export const ItemActionSheet = ({ cargaCombustible, text, action, navigation, actionSheetRef,cargas}: PropsActionSheet) => {
   
    const handlePress = () => {
        if (action === "EDIT") {
            navigation.navigate('Conductor', {
                screen: 'Conductor',
                params: {
                    id: cargaCombustible.id
                }
            })
        } else if (action === "DELETE") {
            console.log("cargaCombustible: " , cargaCombustible.conductor);
            const text = "Desea Eliminar la Carga de Combustible de " + cargaCombustible.conductor.nombre 
                + "," + cargaCombustible.conductor.apellido + " Vehiculo : " 
                + cargaCombustible.vehiculo.tipoVehiculo;

            Alert.alert('Información', text, [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Aceptar', onPress: async () => { 
                        try {
                            const result = await CargaCombustibleService.deleteById(cargaCombustible.id);
                            if ( result) {
                                console.log("apasi aqui results");
                                if( cargas && cargas.length > 0 ) {
                                    cargas  = cargas.filter( x => x.id !== cargaCombustible.id);
                                }
                            }
                            actionSheetRef?.current.hide();
                        }   catch (error) {
                            Alert.alert("Error","Error al eliminar la Carga Combustible");
                            console.error(error); 
                        }
                        
                    }
                },
            ]);
        } else {
            actionSheetRef?.current.hide();
        }
    }
    return (
        <>
            <TouchableOpacity
                onPress={handlePress}>
                <Text style={[styles.itemActionSheet]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    itemActionSheet: {
        fontSize: 16,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignContent: 'center',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
    }
})