import { Portal, Text } from "react-native-paper"
import { FontAwesome } from '@expo/vector-icons'; 
import CargaItem from "./components/carga.item"
import { Alert, Button, Modal, View } from "react-native"
import { useEffect, useState } from "react";
import { Vehiculo } from "../../types/vehiculo";
import CodeQR2 from "../codqr2";
import { converToVehiculo, isTipoCarga } from "../../util/util";
import { TipoCarga } from "../../types/tipo.carga.enum";
import { useCargaCombustibleStore } from "../../store";

export default function CargaVehiculo({ navigation, params }) {

    const [vehiculo, setVehiculo] = useState<Vehiculo>({
        id: null
    });

    const updateVehiculo = useCargaCombustibleStore(state => state.updateVehiculo);

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
   


    const handleChange = (name, e) => {
        setVehiculo({
            ...vehiculo,
            [name]: e
        });
    }


    const handleSubmit = () => {
       navigation.navigate('CargaCombustible',{
         screen: 'CargaCombustible',
         params : {
            id: null
         }
       })
    }

    

    useEffect(() => {
        console.log("funciton data ", data);
        if ( data != "" && data !== undefined) {
           const isTipo = isTipoCarga(data, TipoCarga.Vehiculo.toString());
           if (isTipo) {
              const result = converToVehiculo(data);
              setVehiculo(result);  
              updateVehiculo(result);
            } else {
             Alert.alert("Información","El Code Qr no es de Vehiculo");
           }
  
        }
        navigation.setOptions({
          headerRight: () => (
            <FontAwesome name="qrcode" size={24} color="white"
            onPress={showModal} />
            
          )
        });
     },[data])

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <CargaItem
                label={"Tipo Vehiculo"}
                name={"tipoVehiculo"}
                value={vehiculo.tipoVehiculo}
                setChange={handleChange}
            />


            <CargaItem
                label={"Tipo de Combustible"}
                name={"tipoCombustible"}
                value={vehiculo.tipoCombustible}
                setChange={handleChange}
            />

            <CargaItem
                label={"Nro. Legajo"}
                name={"numeroLegajo"}
                value={vehiculo.numeroLegajo}
                setChange={handleChange}
            />

            <CargaItem
                label={"Numero de Chasis"}
                name={"numeroChasis"}
                value={vehiculo.numeroChasis}
                setChange={handleChange}
            />

            <CargaItem
                label={"Numero de Motor"}
                name={"numeroMotor"}
                value={vehiculo.numeroMotor}
                setChange={handleChange}
            />

            <CargaItem
                label={"Chapa Patente"}
                name={"chapaPatente"}
                value={vehiculo.chapaPatente}
                setChange={handleChange}
            />

            <CargaItem
                label={"Dependencia"}
                name={"dependencia"}
                value={vehiculo.dependecia}
                setChange={handleChange}
            />

            <Portal>
                <Modal visible={visible} onDismiss={hideModal}
                    style={{ backgroundColor: 'white', padding: 40, borderRadius: 4 }}
                >
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    <Button onPress={() => setVisible(false)}
                        title="CLOSE"
                    />
                    <CodeQR2 setData={setData} setVisibleModal={setVisible} />
                </Modal>
            </Portal>

          
            <Button
                onPress={handleSubmit}
                title="Siguiente" />

        </View>

    )
}