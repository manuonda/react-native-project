import { Dispatch, SetStateAction } from "react";
import { View , Text, TextInput, StyleSheet, TextInputProps} from "react-native";
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form'

type InputProps = {
    //setValue: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string;
    control: Control;
    name: string;
    rules: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
} & React.ComponentProps<typeof TextInput>

export default function CustomInput ({control, name,  rules, placeHolder,...textInputProps}: InputProps) {
    return(
       <View>
          {/* <TextInput 
           {...textInputProps}
           value={value}
           onChangeText={setValue}
           placeholder={placeHolder}
           style={style.input}
           ></TextInput> */}

         <Controller
              control={control}
              name={name}
              rules={rules}
              render={( 
                 { field: {value,onChange,onBlur},
                   fieldState: {error}   
                 }) => (
               <View>
               <View style={[style.container ,{ borderColor: error ? 'red': '#e8e8e8'}]}>
                <TextInput 
                {...textInputProps}  
                  style={[style.input,{}]}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeHolder}/>
                  
                  
                </View>
                  { error && (
                    <Text style={{color: 'red', alignSelf:'stretch'}}>
                      {error?.message || 'Error'}</Text>
                  )}
                  </View>
              )}
              />
              </View> 
    )
}

const style= StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width:'100%',

    borderColor: '#e8e8e8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:  10,
    marginVertical: 5,
  },
  input:{}
});