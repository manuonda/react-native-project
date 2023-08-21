import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { appointments } from '../../data/appointments';
import { AntDesign } from '@expo/vector-icons';


export default function AppointmentDetails() {
    console.log("1",appointments[0].doctor);
    const doctor = appointments[0].doctor;
    return (
   
       <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Avatar.Image source={{ uri: doctor.image_url }} size={60} />
        </View>
        <View style={styles.middleContent}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <Text style={styles.specialty}>{new Date(appointments[0].event.start).toLocaleDateString()}</Text>
          
        </View>
        <View style={styles.rightContent}>
     
        </View>
      </View>
    </View>
   
  )
}



const styles = StyleSheet.create({
    card: {
      marginVertical: 10,
      marginHorizontal: 16,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    leftContent: {
      marginRight: 10,
    },
    middleContent: {
      flex: 1,
      marginRight: 10,
    },
    rightContent: {},
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    specialty: {
      fontSize: 14,
      color: '#666',
      marginVertical: 2,
    },
  });
  