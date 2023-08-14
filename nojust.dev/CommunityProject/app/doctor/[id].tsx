import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

export default function Doctors() {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>id = {id}</Text>
    </View>
  )
}