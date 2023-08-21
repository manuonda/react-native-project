import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { AppOwnership } from 'expo-constants';
//import { Link } from '@react-navigation/native';


const AppointmentItem = ({  appointment }) => {
  const {doctor } = appointment.item;
  console.log(appointment)
  return (
  
     <Link href={`/appoinment/${appointment.item.id}`} asChild>
       <Pressable>
      <Card style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Avatar.Image source={{ uri: doctor.image_url }} size={60} />
        </View>
        <View style={styles.middleContent}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <Text style={styles.specialty}>{new Date(appointment.item.event.start).toLocaleDateString()}</Text>
          
        </View>
        <View style={styles.rightContent}>
        <AntDesign name="right" size={24} color={"darkgray"} />
          {/* <IconButton
            icon={() => <MaterialCommunityIcons name="arrow-right" size={24} color="blackgray" />}
          /> */}
        </View>
      </View>
    </Card>
    </Pressable>
     </Link>
    
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
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

export default AppointmentItem;
