import { useEffect, useState } from "react";
import CargaItem from "./components/carga.item";
import { Conductor } from "../../types/conductor.td";
import { View, Button, Modal, Alert } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons, Octicons, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Portal ,Text } from "react-native-paper";
import CodeQR2 from "../codqr2";
import { converToConductor, isTipoCarga } from "../../util/util";
import { TipoCarga } from "../../types/tipo.carga.enum";
import { useCargaCombustibleStore } from "../../store";

export default function CargaConductor({ navigation, route }) {
   
   const [conductor, setConductor] = useState<Conductor>({
      id: null
   });
   const conductorState = useCargaCombustibleStore( state => state.conductorState);
   console.log("conductor state", conductorState);
   const updateConductor= useCargaCombustibleStore(state =>  state.updateConductor);


  const [visible, setVisible] = useState(false);
  const [data,setData] = useState<string>("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  
   useEffect(() => {
      console.log(" ======= Carga Conductor ")
      console.log("funciton data ", data);
      console.log("Tipo Carga : " + TipoCarga.Conductor.toString());
      if ( data != "" && data !== undefined) {
         const isTipo = isTipoCarga(data, TipoCarga.Conductor.toString());
         console.log("isTipo " + TipoCarga.Conductor.toString() + "  => "+isTipo);
         if (isTipo) {
            const result = converToConductor(data) ;
            setConductor(result);  
            updateConductor(result);
         } else {
           Alert.alert("Información","El Code Qr no es de Conductor");
         }

      }
      navigation.setOptions({
        headerRight: () => (
          <FontAwesome name="qrcode" size={26} color="white"
          onPress={showModal} />
        )
      });
   },[data])

    
   const handleChange =(name,e) => {
      setConductor({
         ...conductor,
         [name]:e
      });
   }

   const handleSubmit = () => {
    navigation.navigate('Vehiculo', {
      screen: 'Vehiculo',
      params: {
        id: null,
        image: null,
      }
    });
   }

   
   return(
   
     <View  style={{ flex:1, padding: 20 }}>
     <CargaItem 
        label={"Nombre"}
        name={"nombre"}
        value={conductor.nombre}
        setChange={handleChange}
      />


     <CargaItem 
        label={"Apellido"}
        name={"apellido"}
        value={conductor.apellido}
        setChange={handleChange}
      />

     <CargaItem 
        label={"Jerarquia"}
        name={"jerarquia"}
        value={conductor.jerarquia}
        setChange={handleChange}
      />

      <CargaItem 
        label={"Numero de Legajo"}
        name={"numeroLegajo"}
        value={conductor.numeroLegajo}
        setChange={handleChange}
      />

      <CargaItem 
        label={"Numero de Credencial"}
        name={"numeroCredencial"}
        value={conductor.numeroCredencial}
        setChange={handleChange}
       />
      
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} 
          style={{ backgroundColor: 'white', padding: 40 , borderRadius:4}}
        >
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
          <Button onPress={() => setVisible(false)} 
           title="CLOSE"
          />
          <CodeQR2 setData={setData} setVisibleModal={setVisible}/>
        </Modal>
      </Portal>
      
  
      <View>
        
        <Button 
         onPress={handleSubmit}
         title="Siguiente"/>

      </View>
      
     </View>
      

      
      
  )
}