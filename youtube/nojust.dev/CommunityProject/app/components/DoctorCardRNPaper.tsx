import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const DoctorCardRNPaper = ({ name, specialty, image_url }) => {
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Avatar.Image source={{ uri: image_url }} 
           size={55}  />
        </View>
        <View style={styles.middleContent}>
          <Title style={styles.name}>{name}</Title>
          <Paragraph style={styles.specialty}>{specialty}</Paragraph>
        </View>
        <View style={styles.rightContent}>
          <AntDesign name="right" size={24} color={"darkgray"} />
          {/* <IconButton
            icon={() => <MaterialCommunityIcons name="arrow-right" size={24} color="black" />}
          /> */}
        </View>
      </Card.Content>
    </Card>
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

export default DoctorCardRNPaper;
