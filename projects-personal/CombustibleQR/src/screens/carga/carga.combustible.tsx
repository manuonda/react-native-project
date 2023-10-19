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
       resolver: yupResolver(SchemaCargaCombustible)
    });

    useEffect(() => {
       if(cargaCombustibleParam !== undefined && cargaCombustibleParam !== null ) {
        console.log("cargaCombustibl2e ==> ", cargaCombustibleParam);
        setCargaCombustible(cargaCombustibleParam);
        //sete los valores de hook-form
        reset({...cargaCombustibleParam});
       }
    },[cargaCombustible])
 

    const handleCancelar = () => {
        navigation.navigate('Cargas', {
            screen:'Cargas'
        });
    }
    
    const handleError = (error) => {
      console.log(error);
      setShowErrorComplete(true);
    }

    const handleNext =async  (data) => {
      console.log("cargaCombustible1 : ",cargaCombustible);
      console.log("data guradar : ",data);
      setCargaCombustible({
        ...cargaCombustible,
        ...data
      });
      console.log("cargaCombustible2: ",cargaCombustible);
      Alert.alert("Información","Estan correcto los datos cargados?",
      [
          {
            text:'Cancelar'
          }, {
            text: 'Aceptar',
            onPress: () =>  {
             handleGuardar();
            },
            style: 'cancel',
          }
        ],
      )
    }

    const handleGuardar = async () => {
      try {
        
       
        console.log("conductor.id => ", conductor.id);
        if ( conductor.id === null || conductor.id === undefined ) {
          console.log("save conductor");
          conductor = await  ConductorService.guardar(conductor);    
        }
        if( vehiculo.id === null || vehiculo.id === undefined ) { 
          vehiculo = await VehiculoService.guardar(vehiculo);
        }
        console.log("conductor2 : ", conductor.id);
        console.log("vehiculo2 : ", vehiculo.id);
        console.log("cargandoCombusitlbe : ", cargaCombustible);

        setCargaCombustible({
          ...cargaCombustible,
          idConductor : conductor.id,
          idVehiculo: vehiculo.id,
          idUsuario: 1
        });
        cargaCombustible.idConductor= conductor.id;
        cargaCombustible.idVehiculo = vehiculo.id;
        cargaCombustible.idUsuario =1;

        console.log("cargaCombustible antes de guardar : ", cargaCombustible);
       
       
      
        let resultCarga = null;
        console.log("carga combustible  ===>  ", cargaCombustible);
        if ( cargaCombustible.id === null) {
           cargaCombustible.fechaAlta=new Date().toLocaleDateString()
           console.log("carga save");
           resultCarga = await CargaCombustibleService.guardar(cargaCombustible);
       
        } else {
           console.log("carga update");
           cargaCombustible.fechaModificacion=new Date().toLocaleDateString()
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
            <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"black"}}>Datos de Carga</Text>  
        </View>

        { showErrorComplete ? <>
        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"red"}}>Debe Completar Datos</Text>  
        </View>
      </>: ""}

       <Text>id {cargaCombustible?.id} </Text>
            
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