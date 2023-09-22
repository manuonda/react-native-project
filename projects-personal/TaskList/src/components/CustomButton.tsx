import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    onPress :() => void,
    text: string,
    type: string,
}

const CustomButton = ({onPress, text , type = "PRIMARY"}: Props) => {
  return (
     
    <Pressable  onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3B71EF',
        width:'100%',

        padding:15,
        marginVertical: 5,

        alignItems:'center',
        borderRadius:5
    },
    text: {
        fontWeight:'400',
        color:'#fff',

    },
    container_PRIMARY: {
        backgroundColor:'#1F5E9D'
    },

    container_SECONDARY : {
        backgroundColor: '#b1b7d1'
    },

})