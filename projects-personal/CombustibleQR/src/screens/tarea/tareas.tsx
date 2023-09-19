import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../types/tarea.td';
import TareaItem from './tarea.item';
import { useFocusEffect } from '@react-navigation/native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
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
    color: 'white'
  }

})


export default function Tareas({navigation} ) {
  const [tareas, setTareas] = useState<Array<Tarea>>([]);  
  
  
  const cargarData = async () => {
     try {
        const data = await TareaService.all();   
        setTareas(data);
      } catch (error) {
       console.error('Error Tareas : ',error);
     }
  }

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("useCallBack"); 
      cargarData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  useEffect(() => {
    console.log("useEffect tareas");
    cargarData();
  },[])


  const handleAdd =() => {
    navigation.navigate('Tarea', {
      screen: 'Tarea',
      params: {
        id: null,
      }
    });
  }

  return (
    <View style={styles.container}>
    
      { tareas && tareas.map((tarea:Tarea) => (
         <TareaItem  key={tarea.id} tarea={tarea} navigation={navigation}  />
      ))}
      
      <TouchableOpacity onPress={handleAdd} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}


