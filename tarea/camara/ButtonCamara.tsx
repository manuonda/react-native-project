import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo} from "@expo/vector-icons"
import { Text , StyleSheet } from "react-native";

export default function ButtonCamara({title, onPress, icon, color}) {
  
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo  name={icon} size={28} color={color? color : "#f1f1f1"}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
   text :{
     fontWeight:'bold',
     fontSize:16,
     color:"#f1f1f1",
     marginLeft:10, 
   },
   button : {
     height: 40,
     flexDirection: 'row',
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor:"black"
   }
})