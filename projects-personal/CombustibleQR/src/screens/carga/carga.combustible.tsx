import InputCarga from "./components/input.carga"
import { Alert, Button , View  } from "react-native"
import { useState } from "react";
import { useCargaCombustibleStore } from "../../store";
import { ConductorService } from "../../services/conductor.service";
import { VehiculoService } from "../../services/vehiculo.service";
import { CargaCombustible, CargaCombustible  as TCargaCombustible} from "../../types/carga.combustible";
import { setCommentRange } from "typescript";
import { CargaCombustibleService } from "../../services/carga.combustible.service";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";

export default function Carga({ navigation, params }) {

    const [cargaCombustible, setCargaCombustible] = useState<TCargaCombustible>({
        id: null
    });
    const conductor  = useCargaCombustibleStore((state) => state.conductorState );
    const vehiculo = useCargaCombustibleStore((state) => state.vehiculoState);
    
    const handleChange = (name, e) => {
        setCargaCombustible({
            ...cargaCombustible,
            [name]: e
        });
    }

    const handleCancelar = () => {
        navigation.navigate('Cargas', {
            screen:'Cargas'
        });
    }

    const handleSubmit =async  () => {
       try {
         
         let resultConductor = await  ConductorService.guardar(conductor);   
         let resultVehiculo = await VehiculoService.guardar(vehiculo);
         cargaCombustible.idConductor= resultConductor.id;
         cargaCombustible.idVehiculo = resultVehiculo.id;
         cargaCombustible.idUsuario =1;
         cargaCombustible.fechaAlta=new Date().toLocaleDateString()
         /*setCargaCombustible((cargaCombustible:CargaCombustible) =>{
            ...cargaCombustible,
            idConductor: resultConductor.id,
            idVehiculo: resultVehiculo.id,
            idUsuario: 1,
            
         });
         */
         console.log("resultConductor id : ", resultConductor.id);
         console.log("resultVehiculo id : ", resultVehiculo.id); 
         let resultCarga = null;
         console.log("carga combustible  ===>  ", cargaCombustible);
         if ( cargaCombustible.id === null) {
            console.log("carga save");
            //cargaCombustible =
            resultCarga = await CargaCombustibleService.guardar(cargaCombustible);
        
         } else {
            console.log("carga update");
            setCargaCombustible({
                ...cargaCombustible,
                fechaModificacion: new Date().toLocaleDateString()
            })
            resultCarga = await CargaCombustibleService.update(cargaCombustible);
         }
         console.log("resultCarga : ", resultCarga);

         if ( resultCarga && resultCarga.id !== null ) {
            Alert.alert("Información","Carga Combustible Guardada",
            [
                {
                  text: 'Aceptar',
                  onPress: () =>  {
                    navigation.navigate('Cargas', {
                        screen:'Tareas',
                    }) 
                  },
                  style: 'cancel',
                },
              ],
             )
         }   
        
       } catch (error) {
        Alert.alert("Información","Error al Guardar la Carga Combustible");
        console.error("Error save Data : ", error);
       }
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <InputCarga
                label={"Estacion Servicio"}
                name={"estacionServicio"}
                value={cargaCombustible.estacionServicio}
                setChange={handleChange}
            />


            <InputCarga
                label={"Kilometraje"}
                name={"kilometraje"}
                value={cargaCombustible.kilometraje}
                setChange={handleChange}
            />

            <InputCarga
                label={"Nivel Tanque"}
                name={"nivelTanque"}
                value={cargaCombustible.nivelTanque}
                setChange={handleChange}
            />

            <InputCarga
                label={"Litros Habilitados"}
                name={"litrosHabilitados"}
                value={cargaCombustible.litrosHabilitados}
                setChange={handleChange}
            />

            <InputCarga
                label={"Numero de Remito"}
                name={"numeroRemito"}
                value={cargaCombustible.numeroRemito}
                setChange={handleChange}
            />

           

           <View style={{
             flexDirection:"row",
             width: "100%",
             alignContent: "space-between",
             paddingTop: 10,
           }}>
             <Button title="Cancelar" onPress={handleCancelar}/>
             <Button title="Guardar" onPress={handleSubmit} />
           </View>

        </View>

    )
}