import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopStackParamList } from '../navigation/shop'

type ProductProps = NativeStackScreenProps<ShopStackParamList>;


export default function Products({navigation}: ProductProps) {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <TouchableOpacity
      style={styles.button}
       onPress={() => navigation.navigate('Product')}
      >
       <Text style={styles.buttonText}>Go to Product</Text> 
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
    backgroundColor:'#8bb5bb',
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