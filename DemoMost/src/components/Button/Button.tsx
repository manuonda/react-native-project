import { Button ,View , StyleSheet, Text, Pressable, GestureResponderEvent} from "react-native"

type ButtonProps = {
   text:string,
   onPress: (event: GestureResponderEvent) => void,
   type?:string,
   bgColor?:string,
   fgColor?:string,
} 

export default function CustomButton ({ text,onPress, 
                      type ="PRIMARY", bgColor, fgColor}:ButtonProps) {

    return (
        <Pressable
         onPress={onPress}
         style={[ 
             styles.container , 
             styles[`container_${type}`],
             bgColor ? { backgroundColor: bgColor} : {}
             ]}>
         <Text 
         style={[ 
               styles.text, 
               styles[`text_${type}`],
               fgColor? {color: fgColor}:{}
               ]}>
            {text}</Text>        
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
      
       width:'100%',
       
       alignItems:'center',
       borderRadius:5,
       padding:10,
       marginVertical: 10,
       
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY: {

    },
    text: {
      fontWeight: 'bold',
      color:'white'
    },

    text_TERTIARY:{
        color:'gray'
    }

})