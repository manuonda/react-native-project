import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity} from 'react-native'
import { RootStackParamLis } from '../navigation/main'


type HomeProps = NativeStackScreenProps<RootStackParamLis,'Home'>;



export default function Home({navigation}: HomeProps) {
 return (
  <View style={styles.container}>
    <Text>Categories</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('About',{name:'Paul'})}
      style={styles.button}
    >
    <Text style={styles.buttonText}>Go to About</Text>
   </TouchableOpacity>
   </View>
 )
}

const styles = StyleSheet.create({
  container : {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor:'#EC5B70',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },

})