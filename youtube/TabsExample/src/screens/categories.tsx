import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopStackParamList } from '../navigation/shop';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const isAndroid = Platform.OS === 'android'

console.log(isAndroid);

type CategoriesProps = NativeStackScreenProps<ShopStackParamList, 'Categories'>;

const DismissKeyboard = ({ children }) => {
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
}


const handleKeyBoardPress = () => {
  console.log("aqui presiono");
  Keyboard.dismiss();
}

export default function Categories({ navigation }: CategoriesProps) {
  return (

    <KeyboardAvoidingView style={styles.keyboardView}>
      <TouchableWithoutFeedback 
         onPress={()  => Keyboard.dismiss()}
          accessible={false}
          >
        <View style={styles.container}>
          <Text>Categories</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Products </Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>


  )
}

const styles = StyleSheet.create({
  keyboardView: {
    //flex:1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#8bb5bb',
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