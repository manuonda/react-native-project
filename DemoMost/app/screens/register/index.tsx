import { Stack, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Controller , useForm } from 'react-hook-form';
import { View, Button, Text, TextInput , Image , StyleSheet, useWindowDimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../src/components/Button/Button';
import CustomInput from '../../../src/components/Input/Input';
import Logo from '../../../assets/images/Logo.png';


export default function Register() {
    const {height} = useWindowDimensions();
    
    const router = useRouter();

    const { control, 
            handleSubmit,
            watch,
            formState: { errors }} = useForm({
          
            });
    
 
    const pwd = watch('password');

    const onSignInPressed = (data) => {
       console.log("sign in");
       console.log(data);
    }

    const password = useRef({});
     password.current = watch("password", "");
 
  
    const PATTERN_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   

    
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
        <Stack.Screen 
        options={{
          title:"Register Login",
          headerShown: false
        }}
        />
        
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo , { height: height * 0.3}]} resizeMode='contain'/>
            
             <CustomInput
             control={control}
             name="username"
             placeHolder='Username'
             rules={{required: 'Username is required',
              minLength: {
                value:3,
                message:'Username should be at least 3 characters long'  
              },
             maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long'
             }
            }}
             
            />
           
            <CustomInput
             control={control}
             placeHolder='Email'
             name="email"
             rules={{ 
               required:'Email is required', 
               pattern: { value: PATTERN_REGEX, message: 'Email is invalid'}
             }}
            /> 
            
            <CustomInput
             control={control}
             placeHolder='Password'
             name="password"
             rules={{ 
               required:'Password is required',
               minLength: {
                value:8,
                message:'Password should be at least 8 characters long'  
              }, 
             }}
             secureTextEntry={true}
            /> 

             <CustomInput
             control={control}
             placeHolder='Rpeat password'
             name="password-repeat"
             rules={{ 
               required:'RepeatPassword is required',
               validate: value  => value === pwd.current || 'Password do not match'
             }}
             secureTextEntry={true}
            /> 
      
            <CustomButton 
             text='Register'
             onPress={handleSubmit(onSignInPressed)}
            />

         
              </View>
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    logo : {
        maxWidth:300,
        maxHeight: 300,
        width: '70%'
    },
    root : {
      flex: 1,
      padding: 20,
      alignContent:'center',
      alignItems: 'center',
      backgroundColor:'#e8e8e8'
    }
});