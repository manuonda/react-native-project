import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default function SingOut() {
  return (
    <View style={styles.container}>
      <Text>sign-ut</Text>
    </View>
  )
}