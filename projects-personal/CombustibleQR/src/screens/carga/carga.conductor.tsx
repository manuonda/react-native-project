import { useEffect, useState } from "react";
import InputCarga from "./components/input.carga";
import { Conductor } from "../../types/conductor.td";
import { View, Button, Modal, Alert, Pressable, StyleSheet, TextInput } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons, Octicons, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons } 
from '@expo/vector-icons';
import { Portal ,Text } from "react-native-paper";
import CodeQR2 from "../codqr2";
import { converToConductor, isTipoCarga } from "../../util/util";
import { TipoCarga } from "../../types/tipo.carga.enum";
import { useCargaCombustibleStore } from "../../store";
import CustomButton from "../../components/CustomButton";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { SchemaConductor } from "../../schema/conductor.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CargaCombustible } from "../../types/carga.combustible";


export default function CargaConductor({ navigation, route }) {
   const idCargaCombustible = route.params?.id;
   const cargaCombustibleParam:CargaCombustible = route.params?.cargaCombustible;

   console.log("id: ", idCargaCombustible);

   const [conductor, setConductor] = useState<Conductor>({
      id: null
   })
   const updateConductor= useCargaCombustibleStore(state =>  state.updateConductor);


  const [visible, setVisible] = useState(false);
  const [dataQR,setDataQR] = useState<string>("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [showErrorComplete, setShowErrorComplete] = useState(false);

   const {handleSubmit, control, reset , formState:{errors} } = useForm<Conductor>({
      resolver: yupResolver(SchemaConductor)
   })

   
  
   useEffect(() => {
      if ( dataQR != "" && dataQR !== undefined) {
         const isTipo = isTipoCarga(dataQR, TipoCarga.Conductor.toString());
         hideModal();
         if (isTipo) {
            const result = converToConductor(dataQR);
            console.log("RESULTA:" ,result);
            setConductor(result);
            // update state global   
            updateConductor(result);
            // seteo los valores de hook-form
            reset({...result})
         } else {
           Alert.alert("Información","El Code Qr no es de Conductor");
         }

      } else if(cargaCombustibleParam !== undefined) {
        console.log("id ingreso aqui idCargaCombustible : ", idCargaCombustible);
        console.log("cargaCombustible: ", cargaCombustibleParam);
        setConductor(cargaCombustibleParam?.conductor);
        //sete los valores de hook-form
        reset({...cargaCombustibleParam?.conductor});
        // update state global
        updateConductor(cargaCombustibleParam?.conductor);
      }


   },[dataQR])

  

   const handleError =(errors) =>  {
    setShowErrorComplete(true);
   }

   const handleNext =  (data:Conductor) => {
    navigation.navigate('Vehiculo', {
       id: idCargaCombustible,
       cargaCombustible: cargaCombustibleParam
      });
      
   }
   
   return(
   
     <View  style={{ flex:1, padding: 20   }}>

        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"black"}}>Datos del Conductor</Text>  
        </View>

        { showErrorComplete ? <>
        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 17, alignContent:"center", color:"red"}}>Debe Escanear el Codigo QR</Text>  
        </View>
      </>: ""}

       
      

     <Text>Conductor id : {conductor.id}</Text>
     <InputCarga 
        label={"Nombre"}
        name={"nombre"}
        value={conductor.nombre}
        type={"text"}
        editable={false}
        control={control}
      />


     <InputCarga 
        label={"Apellido"}
        name={"apellido"}
        value={conductor.apellido}
        type={"text"}
        editable={false}
        control={control}
      />

     <InputCarga 
        label={"Jerarquia"}
        name={"jerarquia"}
        value={conductor.jerarquia}
        type={"text"}
        editable={false}
        control={control}
      />

      <InputCarga 
        label={"Numero de Legajo"}
        name={"numeroLegajo"}
        value={conductor.numeroLegajo}
        type={"text"}
        editable={false}
        control={control}
      />

      <InputCarga 
        label={"Numero de Credencial"}
        name={"numeroCredencial"}
        value={conductor.numeroCredencial}
        type={"text"}
        editable={false}
        control={control}
       />
      
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} 
          style={{ 
            backgroundColor: 'white', padding: 50 , borderRadius:6,
            flexDirection:'column',
            justifyContent:'center'
          }}>
            <View style={{flexDirection:'row', justifyContent:'center',
            marginTop:20}}>
            <Text style={{fontSize:24, fontWeight:'500'}}>Escanear Código QR</Text>
          
            </View>
          
          <CodeQR2 setData={setDataQR} setVisibleModal={setVisible}/>
          
          <Pressable style={styles.button} onPress={() => setVisible(false)}>
           <Text style={[styles.text]}>Cerrar</Text>
          </Pressable>
          
        </Modal>
      </Portal>
      
  
      {/** Button Actions */}
      <View style={{flexDirection:"row", marginTop: 10,justifyContent:"space-between"}}>
        <Pressable style={[styles.button,{width:'45%'}]} onPress={showModal}>
         <View style={{flexDirection:"row", justifyContent:"space-between" , padding:1}}>
         <FontAwesome name="qrcode" size={20} color="white"
          onPress={showModal} />
         <Text style={[styles.text,{paddingLeft:10}]}>Scan Codigo QR</Text>
         </View>
        </Pressable>
        
        <Pressable style={[styles.button,{width:'45%'}]} onPress={handleSubmit(handleNext, handleError)}>
         <Text style={styles.text}>Siguiente</Text>
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