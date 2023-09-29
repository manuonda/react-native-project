import CargaItem from "./components/carga.item"
import { Button , View  } from "react-native"
import { useState } from "react";
import { Combustible } from "../../types/combustible";
import { useCargaCombustibleStore } from "../../store";

export default function CargaCombustible({ navigation, params }) {

    const [combustible, setCombustible] = useState<Combustible>({
        id: null
    });
    const conductor  = useCargaCombustibleStore((state) => state.conductorState );
    const vehiculo = useCargaCombustibleStore((state) => state.vehiculoState);
    console.log("conductor : {}", conductor , "vehiculo : ", vehiculo);

    const handleChange = (name, e) => {
        setCombustible({
            ...combustible,
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

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <CargaItem
                label={"Estacion Servicio"}
                name={"estacionServicio"}
                value={combustible.estacionServicio}
                setChange={handleChange}
            />


            <CargaItem
                label={"Kilometraje"}
                name={"kilometraje"}
                value={combustible.kilometraje}
                setChange={handleChange}
            />

            <CargaItem
                label={"Nivel Tanque"}
                name={"nivelTanque"}
                value={combustible.nivelTanque}
                setChange={handleChange}
            />

            <CargaItem
                label={"Litros Habilitados"}
                name={"litrosHabilitados"}
                value={combustible.litrosHabilitados}
                setChange={handleChange}
            />

            <CargaItem
                label={"Numero de Remito"}
                name={"numeroRemito"}
                value={combustible.numeroRemito}
                setChange={handleChange}
            />

           

           <View style={{
             flexDirection:"row",
             width: "100%",
             alignContent: "space-between",
             paddingTop: 10,
           }}>
             <Button title="Cancelar"/>
             <Button title="Guardar" />
           </View>

        </View>

    )
}