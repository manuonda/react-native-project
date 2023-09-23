import { useEffect, useState } from "react";
import CargaItem from "./components/carga.item";
import { Conductor } from "../../types/conductor.td";
import { View, Button, Modal } from "react-native"
import { Ionicons, Octicons, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Portal ,Text } from "react-native-paper";
import CodeQR from "../codeqr";

export default function CargaConductor({ navigation, route }) {
   
   const [conductor, setConductor] = useState<Conductor>({
      id: null
   });

   const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

   useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <MaterialCommunityIcons name="delete" size={24} color="white"
            onPress={() => alert("hola mundo")} />
        )
      });
   },[])

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
   
     <View 
       style={{
         flex:1,
         padding: 20,
       }}
     >
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
          <CodeQR />
        </Modal>
      </Portal>
      
      <Button  onPress={showModal} 
        title="Modal"
      />
      
      <Button 
         onPress={handleSubmit}
         title="Siguiente32"/>

     </View>
      

      
      
  )
}