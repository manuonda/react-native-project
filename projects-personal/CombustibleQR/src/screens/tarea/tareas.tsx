import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function Tareas({navigation} ) {
  const handleEdit = () => {
    console.log("handle Edit Tarea");
    navigation.navigate('Tarea', {
      screen: 'Tarea',
      params: {
        itemId: 86,
        otherParam: 'anything you want here',
      }
    });
  }

  return (
    <ScrollView style={styles.container}>

      <Pressable onPress={handleEdit}
        style={styles.item}>
        <View>
          <Text style={styles.title}>Tarea numero 1</Text>
          <Text style={styles.subtitle}>Fecha</Text>
        </View>
      </Pressable>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  item: {
    width: '100%',
    borderBlockColor: '#e3e3e3',
    padding: 10,
    borderColor: '#e3e3e3',
    backgroundColor: '#e3e3e3',
    shadowColor: '#e3e3e3',
    borderRadius: 5,
    marginTop: 5,

  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 13,
    color: 'red'
  }

})