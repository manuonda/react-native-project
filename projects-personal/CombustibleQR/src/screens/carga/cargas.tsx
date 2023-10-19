import { Pressable, StyleSheet, Text, TouchableOpacity, View, Button ,ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { TareaService } from '../../services/tarea.service';
import { useFocusEffect } from '@react-navigation/native';
import { CargaCombustible } from '../../types/carga.combustible';
import { CargaCombustibleService } from '../../services/carga.combustible.service';
import CargaItem from './components/input.carga';
import CargaCombustibleItem from './components/carga.combustible.item';
import { seed } from '../../data/seed'
import { DatabaseService } from '../../services/database.service';
//import ActionSheet, { ActionSheetRef }  from "react-native-actions-sheet";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { ItemActionSheet } from './components/item.action.sheet';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Spinner from 'react-native-loading-spinner-overlay';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
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
  },
  itemActionSheet: {
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignContent: 'center',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  spinnerTextStyle: {
    color: 'gray',
  },

})


export default function Cargas({ navigation }) {
  const [cargaCombustibles, setCargaCombustibles] = useState<Array<CargaCombustible>>([]);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [cargaCombustibleSelect, setCargaCombustibleSelect] = useState<CargaCombustible>({
    id:null,
  });
  const [loading, setLoading] = useState<boolean>(true);


  const cargarData = async () => {
    try {
      const list = seed.split(";");
      for (const table of list) {
        if (table.trim() !== "" && table.trim().length > 0) {
          //console.log("execute sql");
          await DatabaseService.executeSQL(table, []);
        }
      }
      const data = await CargaCombustibleService.all();
      //console.log("result cargas : ", data);
      setCargaCombustibles(data);
      setLoading(false);
    } catch (error) {
      console.error('Error CargasCombustibles : ', error);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("useCallBack");
      cargarData();
      return () => {
       
      };
    }, [])
  );
  useEffect(() => {
    cargarData();
  }, [])


  const handleAdd = () => {

    navigation.navigate('Conductor', {
      screen: 'Conductor',
      params: {
        id: null,
        image: null,
      }
    });
  }


  return (
     
      <View style={styles.container}>
        { loading ? 
           ( 
            <Spinner
               visible={loading}
               textContent={'Loading...'}
               textStyle={styles.spinnerTextStyle}
            />   

            ) : (
           <>
          { cargaCombustibles && cargaCombustibles.map((carga: CargaCombustible) => (
            <CargaCombustibleItem key={carga.id} carga={carga} navigation={navigation}
             actionSheetRef={actionSheetRef} setCargaCombustibleSelect={setCargaCombustibleSelect}
            
              />
            ))
          }
          
         </> 
         )
          
          
         
        }
         
        <View>
         <Text>id : {cargaCombustibleSelect.id}</Text>  
        </View> 
    
        <TouchableOpacity onPress={handleAdd} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>

        <ActionSheet ref={actionSheetRef}>
          <View
            style={{ justifyContent: 'space-between' }}>
            <ItemActionSheet
              action='EDIT' actionSheetRef={actionSheetRef}
              cargaCombustible={cargaCombustibleSelect}
              navigation={navigation}
              text='Editar'
              key={'Editar'} 
              cargas={cargaCombustibles}

              setCargaCombustibles={setCargaCombustibleSelect}
            />
           <ItemActionSheet 
              action='DELETE' actionSheetRef={actionSheetRef}
              cargaCombustible={cargaCombustibleSelect}
              navigation={navigation}
              text='Eliminar'
              key={'Eliminar'} 
              cargas={cargaCombustibles}
              setCargaCombustibles={setCargaCombustibleSelect}
           />
           <ItemActionSheet 
             action='CANCELAR'
             actionSheetRef={actionSheetRef}
             cargaCombustible={cargaCombustibleSelect}
             navigation={navigation}
             text='Cancelar'
             key={'Cancelar'}
             cargas={cargaCombustibles}
             setCargaCombustibles={setCargaCombustibleSelect}
           />
          </View>

        </ActionSheet>
      </View>

  )
}


