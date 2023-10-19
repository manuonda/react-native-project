import { Portal, Text } from "react-native-paper"
import InputCarga from "./components/input.carga"
import { Alert, Button, Modal, View, Pressable, StyleSheet } from "react-native"
import { useEffect, useState } from "react";
import { Vehiculo } from "../../types/vehiculo";
import CodeQR2 from "../codqr2";
import { converToVehiculo, isTipoCarga } from "../../util/util";
import { TipoCarga } from "../../types/tipo.carga.enum";
import { useCargaCombustibleStore } from "../../store";
import { useForm } from "react-hook-form"
import { SchemaConductor } from "../../schema/conductor.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaVehiculo } from "../../schema/vehiculo.schema";
import { FontAwesome } from '@expo/vector-icons';
import { CargaCombustible } from "../../types/carga.combustible";

export default function CargaVehiculo({ navigation, route }) {
    const idCargaCombustible = route.params?.id;
    const cargaCombustibleParam: CargaCombustible = route.params?.cargaCombustible;

    const [vehiculo, setVehiculo] = useState<Vehiculo>({
        id: null
    });

    const updateVehiculo = useCargaCombustibleStore(state => state.updateVehiculo);

    const [visible, setVisible] = useState(false);
    const [dataQR, setDataQR] = useState<string>("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [showErrorComplete, setShowErrorComplete] = useState(false);

    const { handleSubmit, control, reset } = useForm<Vehiculo>({
        resolver: yupResolver(SchemaVehiculo)
    })

    useEffect(() => {
        if (dataQR != "" && dataQR !== undefined) {
            const isTipo = isTipoCarga(dataQR, TipoCarga.Vehiculo.toString());
            hideModal();
            if (isTipo) {
                const result = converToVehiculo(dataQR);
                setVehiculo(result);
                // update state vehiculo
                updateVehiculo(result);
                // reset hook form 
                reset({ ...result });
            } else {
                Alert.alert("Información", "El Code Qr no es de Vehiculo");
            }

        } else if (cargaCombustibleParam !== undefined) {
            setVehiculo(cargaCombustibleParam?.vehiculo);
            //seteo los valores del hook-form
            reset({ ...cargaCombustibleParam?.vehiculo });
            // update state global 
            updateVehiculo(cargaCombustibleParam?.vehiculo);
        }

    }, [dataQR])

    const handleNext = (data) => {
        navigation.navigate('CargaCombustible', {
            id: idCargaCombustible,
            cargaCombustible: cargaCombustibleParam
        });
    }

    const handleError = (errors) => {
        setShowErrorComplete(false);
    }
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 17, alignContent: "center", color: "black" }}>Datos del Vehiculo</Text>
            </View>

            {showErrorComplete ? <>
                <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 17, alignContent: "center", color: "red" }}>Debe Escanear el Codigo QR</Text>
                </View>
            </> : ""}

            <Text>Vehiculo id : {vehiculo.id}</Text>

            <InputCarga
                label={"Tipo Vehiculo"}
                name={"tipoVehiculo"}
                value={vehiculo.tipoVehiculo}
                type={"text"}
                editable={false}
                control={control}
            />


            <InputCarga
                label={"Tipo de Combustible"}
                name={"tipoCombustible"}
                value={vehiculo.tipoCombustible}
                type={"text"}
                editable={false}
                control={control}
            />

            <InputCarga
                label={"Nro. Legajo"}
                name={"numeroLegajo"}
                value={vehiculo.numeroLegajo}
                type={"text"}
                editable={false}
                control={control}
            />

            <InputCarga
                label={"Numero de Chasis"}
                name={"numeroChasis"}
                value={vehiculo.numeroChasis}
                type={"text"}
                editable={false}
                control={control}
            />

            <InputCarga
                label={"Numero de Motor"}
                name={"numeroMotor"}
                value={vehiculo.numeroMotor}
                type={"text"}
                editable={false}
                control={control}
            />

            <InputCarga
                label={"Chapa Patente"}
                name={"chapaPatente"}
                value={vehiculo.chapaPatente}
                type={"text"}
                editable={false}
                control={control}
            />

            <InputCarga
                label={"Dependencia"}
                name={"dependencia"}
                value={vehiculo.dependencia}
                type={"text"}
                editable={false}
                control={control}
            />


            <Portal>
                <Modal visible={visible} onDismiss={hideModal}
                    style={{
                        backgroundColor: 'white', padding: 50, borderRadius: 6,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>Escanear Código QR</Text>

                    </View>

                    <CodeQR2 setData={setDataQR} setVisibleModal={setVisible} />

                    <Pressable style={styles.button} onPress={() => setVisible(false)}>
                        <Text style={[styles.text]}>Cerrar</Text>
                    </Pressable>

                </Modal>
            </Portal>

            {/** Button Actions */}
            <View style={{ flexDirection: "row", marginTop:10, justifyContent: "space-between" }}>
                <Pressable style={[styles.button, { width: '45%' }]} onPress={showModal}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 1 }}>
                        <FontAwesome name="qrcode" size={20} color="white"
                            onPress={showModal} />
                        <Text style={[styles.text, { paddingLeft: 10 }]}>Scan Codigo QR</Text>
                    </View>
                </Pressable>

                <Pressable style={[styles.button, { width: '45%' }]} onPress={handleSubmit(handleNext, handleError)}>
                    <Text style={styles.text}>Siguiente</Text>
                </Pressable>
            </View>


        </View>

    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3B71EF',
        padding: 10,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontWeight: '400',
        color: '#fff',
    }
});