import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Button, Text, TextInput, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../../src/components/Button/Button';
import CustomInput from '../../../src/components/Input/Input';
import Logo from '../../../assets/images/Logo.png';


export default function Login() {
    const { height } = useWindowDimensions();
    const load
    const router = useRouter();
    const { control,
        handleSubmit,
        formState: { errors }, } = useForm();

    const onSignInPressed = (data) => {
        console.log("sign in");
        console.log(data);
        
    }


    const onForgotPassword = () => {
    }

    const onSignUpPress = () => {
        router.push("/screens/register");
    };

    console.log("informa cnumnero 23423423");

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />

                <CustomInput
                    control={control}
                    name="username"
                    placeHolder='Username'
                    secureTextEntry={false}
                    rules={{ required: 'Username is required' }}

                />

                <CustomInput
                    control={control}
                    placeHolder='Password'
                    name="password"
                    secureTextEntry={true}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message: 'Password should be minimum 3'
                        }
                    }}
                />




                <CustomButton
                    text='Sign In'
                    onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton
                    text='Forgot Password'
                    onPress={onForgotPassword}
                    type="TERTIARY"
                />


                <CustomButton
                    text='Sign in with Facebook'
                    onPress={onForgotPassword}
                    type="PRIMARY"
                    bgColor='#E7EAF3'
                    fgColor='#4567A9'
                />

                <CustomButton
                    text='Sign in with Google'
                    onPress={onForgotPassword}
                    type="PRIMARY"
                    bgColor='#FAE9EA'
                    fgColor='#DD4D44'
                />

                <CustomButton
                    text='Sign in with Apple'
                    onPress={onForgotPassword}
                    type="PRIMARY"
                    bgColor='#e3e3e3'
                    fgColor='#363636'
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    logo: {
        maxWidth: 300,
        maxHeight: 300,
        width: '70%'
    },
    root: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8'
    }
});