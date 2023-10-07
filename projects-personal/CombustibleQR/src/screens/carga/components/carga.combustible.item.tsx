import { Pressable, View, StyleSheet, Text } from "react-native"
import { CargaCombustible } from "../../../types/carga.combustible"

type PropsItem = {
    carga: CargaCombustible,
    navigation: any,
    actionSheetRef: any,
    setCargaCombustibleSelect: any,
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderBlockColor: '#e3e3e3',
        padding: 10,
        borderColor: '#e3e3e3',
        backgroundColor: '#F5F5F5',
        shadowColor: '#e3e3e3',
        borderRadius: 5,
        marginTop: 5,
    
      },
      title: {
        fontSize: 14,
        fontWeight: '400'
      },
      subtitle: {
        fontSize: 13,
        color: 'red'
      },
})


const CargaCombustibleItem = ({carga,navigation, actionSheetRef, setCargaCombustibleSelect}: PropsItem) => {
    
    const showCarga = (carga) => {
      //action sheet in cargas 
      actionSheetRef.current?.show();
      setCargaCombustibleSelect(carga);
    };
    return (<>
        <Pressable onPress={() => showCarga(carga)}
            key={carga.id} style={styles.item}>
            <View style={{flexDirection:'row'}}>
                <Text>Vehiculo: </Text><Text style={styles.title}>{carga.vehiculo.tipoVehiculo}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Numero Chasis: </Text><Text>{carga.vehiculo.numeroChasis}</Text> 
            </View>
            <View style={{flexDirection:'row'}}>
              <Text>Conductor:</Text>
              <Text> {carga.conductor.nombre}</Text><Text> {carga.conductor.apellido}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text>Fecha : </Text><Text>{carga.fechaAlta}</Text>
            </View>
           
        </Pressable>
    </>)
};
export default CargaCombustibleItem;