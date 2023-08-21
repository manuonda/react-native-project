import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
//import { Link } from '@react-navigation/native';


const DoctorCard = ({ id, name, specialty, image_url }) => {
  return (
     <Link href={`/doctor/${id}`} asChild>
       <Pressable>
      <Card style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Avatar.Image source={{ uri: image_url }} size={60} />
        </View>
        <View style={styles.middleContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialty}>{specialty}</Text>
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
    color: 'gray',
  },
});

export default DoctorCard;
