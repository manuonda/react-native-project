import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { RootStackParamLis } from '../navigation/main';

type AboutProps = NativeStackScreenProps<RootStackParamLis,'About'>;

export default function About({route}: AboutProps) {
  const { name } = route.params;
  return (
    <View>
      <Text>Name parameter : {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor:'#EC5B70',
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
