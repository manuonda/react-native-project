import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, Octicons, MaterialIcons, AntDesign , Entypo , MaterialCommunityIcons} from '@expo/vector-icons';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { Tarea as TTarea } from '../../types/tarea.td';
import { TareaService } from '../../services/tarea.service';
import { TareasStackParamList } from '../../navigation/tarea.stack';
import * as Sql from "expo-sqlite"
import * as SQLite from 'expo-sqlite';
import { TextInput as TextInputN } from 'react-native-paper';
import Tareas from './tareas';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';


type TareaProps = NativeStackScreenProps<TareasStackParamList, 'Tarea'>;

const db = Sql.openDatabase("database.db");

export default function Tarea({ navigation, route }) {
  /* 2. Get the param */
  const { params } = route.params;
  const { id } = params;
  const idParameter = id;
  const isValue = idParameter !== undefined && idParameter !== null &&
  idParameter !== "";   
  console.log("isValue : ", isValue);   

  const [tarea, setTarea] = useState<TTarea>({
    id,
    nombre: '',
    descripcion: '',
    fechaVencimiento: '',
    repetir: 0,
    nota: '',
    cameraPath: '',
    filePath: ''
  });

  const cargarData = async () => {
    try {
      if (isValue) {
        const data = await TareaService.findById(idParameter);
        console.log("tarea data ", data);
        if (data !== null) {
          setTarea(data);
        }
      }
    } catch (error) {
      console.error('Error Cargar Data : ', error);
    }
  }

  useEffect(() => {
    if(isValue) {
      navigation.setOptions({
        headerRight: () => (
          <MaterialCommunityIcons name="delete" size={24} color="white"
           onPress={() => alert("hola mundo")}/>
        )   
       });
    }
    
     cargarData();
  }, [id, navigation])

  const handleSubmit = async () => {
    console.log('handle sumbit');
    try {
      if (!isValue) {
        await TareaService.guardar(tarea);
      } else {
        await TareaService.update(tarea, idParameter);
      }
      
      navigation.navigate("Tareas");

    } catch (error) {
      console.error("Error handle Submit : ", error);
    }
  }


  const handleChange = (key, e) => {
    setTarea({ ...tarea, [key]: e });
  }

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: "#FFFFFF",
        padding: 20,
        flex: 1,

      }}
    >


      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 10 }}>
          <Octicons name="note" size={24} color="gray" />
        </View>
        <View style={{ width: '90%' }}>
          <Text style={{ fontWeight: '400', fontSize:16 }}>Nombre</Text>
          <TextInput
            style={{
              borderColor: '#88958d',
              borderWidth: 0.1,
              color: 'gray',
              padding: 3,
              fontSize: 14
            }}
            value={tarea.nombre}
            placeholder='Toca para ingresar Nombre'
            onChangeText={(e) => handleChange('nombre', e)} />
          <View style={{
            marginTop: 3, borderBottomWidth: 0.3,
            borderBottomColor: 'gray', width: '100%'
          }} />

        </View>
      </View>

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop:14 }}>
        <View style={{ marginRight: 10 }}>
          <MaterialIcons name="description" size={24} color="gray" />
        </View>

        <View style={{ width: '90%' }}>
          <Text style={{ fontWeight: '400' , fontSize: 16 }}>Descripcion</Text>
          <TextInput key={"descripcion"}
            placeholder='Toca para ingresar Descripcion'
            style={{
              borderColor: '#88958d',
              borderWidth: 0.1,
              color: 'gray',
              padding: 3,
              fontSize: 14
            }}
            value={tarea.descripcion} multiline={true}
            onChangeText={(e) => handleChange('descripcion', e)} />

          <View style={{
            marginTop: 3, borderBottomWidth: 0.3,
            borderBottomColor: 'gray', width: '100%'
          }} />
        </View>
      </View>

      

      <View
        style={{ flexDirection: 'row', alignItems: 'center' , marginTop: 16}}>
        <View style={{ marginRight: 10 }}>
           <Entypo name="text" size={24} color="gray" />
        </View>

        <View style={{ width: '90%' }}>
          <Text style={{ fontWeight: '400', fontSize: 16 }}>Nota</Text>
          <TextInput key={"descripcion"}
            placeholder='Toca para ingresar Nota'
            style={{
              borderColor: '#88958d',
              borderWidth: 0.1,
              color: 'gray',
              padding: 3,
              fontSize: 14
            }}
            value={tarea.nota} multiline={true}
            onChangeText={(e) => handleChange('nota', e)} />

          <View style={{
            marginTop: 3, borderBottomWidth: 0.3,
            borderBottomColor: 'gray', width: '100%'
          }} />
        </View>
      </View>

      <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabIcon} >+</Text>
      </TouchableOpacity>

      <FAB
    icon="check"
    color='white'
    style={styles.fab}
    onPress={handleSubmit}
  />
    
      
    </View>


  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#7986CB',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: '#ffffff'
  },
  
});

