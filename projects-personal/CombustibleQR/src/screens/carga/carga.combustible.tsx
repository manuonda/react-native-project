import InputCarga from "./components/input.carga"
import { Alert, Button , View , Text , Pressable , StyleSheet } from "react-native"
import { useEffect, useState } from "react";
import { useCargaCombustibleStore } from "../../store";
import { ConductorService } from "../../services/conductor.service";
import { VehiculoService } from "../../services/vehiculo.service";
import { CargaCombustible, CargaCombustible  as TCargaCombustible} from "../../types/carga.combustible";
import { setCommentRange } from "typescript";
import { CargaCombustibleService } from "../../services/carga.combustible.service";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaCargaCombustible } from "../../schema/carga.combustible.schema";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { FontAwesome } from '@expo/vector-icons'; 


export default function Carga({ navigation, route }) {
    const idCargaCombustible = route.params?.id;
    const cargaCombustibleParam:TCargaCombustible = route.params?.cargaCombustible;

    const [cargaCombustible, setCargaCombustible] = useState<TCargaCombustible>({
        id: null,
        fechaAlta:"",
        fechaModificacion:""
    });
    let conductor  = useCargaCombustibleStore((state) => state.conductorState );
    let vehiculo = useCargaCombustibleStore((state) => state.vehiculoState);
    const [showErrorComplete, setShowErrorComplete] = useState(false);

    const {handleSubmit, control, reset ,formState:{errors}} = useForm<TCargaCombustible>({
       resolver: yupResolver(SchemaCargaCombustible),
       defaultValues:{
        id: cargaCombustible.id,
        kilometraje: cargaCombustible.kilometraje,
        nivelTanque: cargaCombustible.nivelTanque,
        litrosHabilitados: cargaCombustible.litrosHabilitados,
        estacionServicio: cargaCombustible.estacionServicio,
        idEstacionServicio: cargaCombustible.idEstacionServicio,
        idVehiculo: cargaCombustible.idVehiculo
       }
    });

    useEffect(() => {
       if(cargaCombustibleParam !== undefined && cargaCombustibleParam !== null ) {
        setCargaCombustible(cargaCombustibleParam);
        //sete los valores de hook-form
        reset({
         ...cargaCombustibleParam});
       }
    },[])
 

    const handleCancelar = () => {
        navigation.navigate('Cargas', {
            screen:'Cargas'
        });
    }
    
    const handleError = (error) => {
      console.log("error  : ", error);
      setShowErrorComplete(true);
    }

    const handleNext =async  (data:TCargaCombustible) => {
     
      setCargaCombustible({
        ...cargaCombustible,
        ...data
      });
      //console.log("cargaCombustible2: ",cargaCombustible);
      Alert.alert("Información","Estan correcto los datos cargados?",
      [
          {
            text:'Cancelar'
          }, {
            text: 'Aceptar',
            onPress: () =>  {
             handleGuardar(data);
            },
            style: 'cancel',
          }
        ],
      )
    }

    const handleGuardar = async (cargaCombustible: TCargaCombustible) => {
      try {
        if ( conductor.id === null || conductor.id === undefined ) {
          conductor = await  ConductorService.guardar(conductor);    
        }
        if( vehiculo.id === null || vehiculo.id === undefined ) { 
          vehiculo = await VehiculoService.guardar(vehiculo);
        }
      
        setCargaCombustible({
          ...cargaCombustible,
          idConductor : conductor.id,
          idVehiculo: vehiculo.id,
          idUsuario: 1
        });
        cargaCombustible.idConductor= conductor.id;
        cargaCombustible.idVehiculo = vehiculo.id;
        cargaCombustible.idUsuario =1;

        let resultCarga = null;

        if ( cargaCombustible.id === null) {
           cargaCombustible.fechaAlta=new Date().toLocaleDateString()
           resultCarga = await CargaCombustibleService.guardar(cargaCombustible);
       
        } else {
           cargaCombustible.fechaModificacion=new Date().toLocaleDateString()
           console.log("data que onda aqui ======> ",cargaCombustible);
           resultCarga = await CargaCombustibleService.update(cargaCombustible);
        }

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
            <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"black"}}>Datos de Carga</Text>  
        </View>

        { showErrorComplete ? <>
        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"red"}}>Debe Completar Datos</Text>  
        </View>
      </>: ""}

       <Text>id {cargaCombustible?.id} </Text>
            <Text>cargaCombusitble : {cargaCombustible.estacionServicio}</Text>
            <InputCarga
                label={"Estacion Servicio"}
                name={"estacionServicio"}
                value={cargaCombustible.estacionServicio}
                type={"text"}
                editable={true}
                control={control}
            />


            <InputCarga
                label={"Kilometraje"}
                name={"kilometraje"}
                value={cargaCombustible.kilometraje}
                type={"numeric"}
                editable={true}
                control={control}

            />

            <InputCarga
                label={"Nivel Tanque"}
                name={"nivelTanque"}
                value={cargaCombustible.nivelTanque}
                type={"numeric"}
                editable={true}
                control={control}

            />

            <InputCarga
                label={"Litros Habilitados"}
                name={"litrosHabilitados"}
                value={cargaCombustible.litrosHabilitados}
                type={"numeric"}
                editable={true}
                control={control}

            />

            <InputCarga
                label={"Numero de Remito"}
                name={"numeroRemito"}
                value={cargaCombustible.numeroRemito}
                type={"numeric"}
                editable={true}
                control={control}

            />

           

        <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-between"}}>
        <Pressable style={[styles.button,{width:'45%'}]} onPress={handleCancelar}>
         <View style={{flexDirection:"row", justifyContent:"space-between" , padding:1}}>
         <Text style={[styles.text,{paddingLeft:10}]}>Cancelar</Text>
         </View>
        </Pressable>
        
        <Pressable style={[styles.button,{width:'45%'}]} onPress={handleSubmit(handleNext,handleError)}>
         <Text style={styles.text}>Guardar</Text>
        </Pressable>
      </View>

        </View>

    )
}

const styles = StyleSheet.create({
    button:{
     backgroundColor:'#3B71EF',
     padding:10,
     marginVertical: 5,
 
     alignItems:'center',
     borderRadius:5
   },
   text:{
       fontWeight:'400',
       color:'#fff',
   }
 });