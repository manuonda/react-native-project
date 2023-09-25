import {StyleSheet, View , Text , TextInput } from "react-native"
import { styles }  from "./styles"



export default function CargaItem({label, value, name, setChange }) {
  
  const handleChange = (name,e) => {
    setChange(name,e);
  }

  return (
    <View style={styles.rowdata}>
    <View style={{ marginRight: 10 }}>
    </View>
    <View style={{ width: '90%' }}>
      <Text style={{ fontWeight: '400', fontSize: 16 }}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(e) => handleChange(name, e)} />
      <View style={styles.line} />
    </View>
  </View>
  )  
};