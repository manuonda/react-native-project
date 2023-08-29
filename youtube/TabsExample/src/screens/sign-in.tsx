import { View, Text , StyleSheet , Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
    },
    row : {
      flexDirection:'row'
    },
    button: {
       color:'primary'
    },
    text: {
      fontSize:14,
      fontWeight:'bold',
      color:'black',
      marginBottom:10,
    },
    title :{
      padding: 20,
      fontSize: 20,
      fontWeight:'bold',
      color:'#13330c'

    }
})

export default function SignIn() {
  const [username, setUsername ] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignInPressed = () => {
    console.log('onPressed');
  }
  return (
    <View style={styles.container}>
       <Text style={styles.title}>ACCESO AL SISTEMA </Text>
       <Text style={styles.text}>Usuario</Text>
       <CustomInput  value={username} setValue={setUsername} placeHolder='Usuario' /> 
       <Text style={styles.text}>Contraseña</Text>
       <CustomInput value={password} setValue={setPassword} placeHolder='Contraseña' />
       <CustomButton onPress={onSignInPressed} text='Acceder' type='PRIMARY' />
       
    </View>
  )
}
