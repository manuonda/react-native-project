import {StyleSheet, View , Text , TextInput } from "react-native"


const styles = StyleSheet.create({
  rowdata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  line: {
    marginTop: 3, borderBottomWidth: 0.3,
    borderBottomColor: 'gray', width: '100%'
  },
  textInput : {
     borderColor: '#88958d',
     borderWidth: 0.1,
     color: 'gray',
     padding: 3,
     fontSize: 14
  }

});




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