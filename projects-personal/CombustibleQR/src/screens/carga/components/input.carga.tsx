import {StyleSheet, View , Text , TextInput } from "react-native"
import { styles }  from "./styles"
import { useForm, Controller, SubmitHandler, Field } from "react-hook-form"
import { HelperText } from "react-native-paper";

type PropsTextInput = {
  label:string,
  value: string,
  name: string,
  setChange: any,
  type: string,
  editable: boolean;
};


export default function InputCarga({
  label, value, name,control, 
    type , 
  editable}) {
  
  


  return (
    <View style={styles.rowdata}>
    <View style={{ marginRight: 10 }}>
    </View>
    <View style={{ width: '90%' }}>
      <Controller 
         name={name}
         control={control}
         render={(
           { field:{ onChange, value, onBlur},
             fieldState: {error, invalid} 
           }
          ) => (
            <View>
              <Text style={{ fontWeight: '300', fontSize: 14 }}>{label}</Text>
               <TextInput
               style={styles.textInput}
               value={value}
               onChangeText={onChange} 
               onBlur={onBlur}
               />
            {error && (
              <Text style={{color:'red' , fontWeight:"300"}}> {error?.message } </Text>
            )}
           
            <View style={styles.line} /> 
            </View>
           
      
         )}
      />
            
    </View>
  </View>
  )  
};