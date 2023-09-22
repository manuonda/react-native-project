import { View, Text, TextInput , StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'


type Props = {
    value:string;
    key: string;
    setValue: Dispatch<SetStateAction<string | number>>;
    placeHolder:string;
}

const CustomInput = ({value,key,setValue,placeHolder}: Props) => {

    const handleChange = (event) => {
       const {name, type, text} = event;
       console.log("eventh handle change: ", event);
       setValue(text);
    }

    
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} 
         onChangeText={(e) => handleChange(e)} placeholder={placeHolder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container  :{
      backgroundColor:'white',
      width: '100%',

      borderColor:'#88958d',
      borderWidth: 1,
      borderRadius:5,
      
      paddingHorizontal: 10,
      marginVertical: 5,
      padding: 10,
    },
    input : {
       fontWeight:'bold',
    }
})

export default CustomInput