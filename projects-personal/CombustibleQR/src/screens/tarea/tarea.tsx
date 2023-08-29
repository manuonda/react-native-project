import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { TareasStackParamList } from '../../navigation/tareas.stack';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

type TareaProps = NativeStackScreenProps<TareasStackParamList, 'Tarea'>;



const Tarea = ({navigation,route}) => {

      /* 2. Get the param */
  //const { itemId } = route.params;
  //const { otherParam } = route.params;
  //console.log(itemId, otherParam);
  return (
    <ScrollView>
     <View>
      <Text>Informacion numero uno </Text>
     </View>
    </ScrollView>
  )
}

export default Tarea