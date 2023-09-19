import { Pressable, View, StyleSheet, Text } from "react-native"
import { Tarea } from "../../types/tarea.td"

type PropsItem = {
    tarea: Tarea,
    navigation: any
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderBlockColor: '#e3e3e3',
        padding: 10,
        borderColor: '#e3e3e3',
        backgroundColor: '#F5F5F5',
        shadowColor: '#e3e3e3',
        borderRadius: 5,
        marginTop: 5,
    
      },
      title: {
        fontSize: 14,
        fontWeight: '400'
      },
      subtitle: {
        fontSize: 13,
        color: 'red'
      },
})


const TareaItem = ({tarea,navigation}: PropsItem) => {
    
    const handleEdit = (tarea) => {
       navigation.navigate('Tarea', {
        screen: 'Tarea',
        params: {
          id: tarea.id,
        }
      });  
    };
    return (<>
        <Pressable onPress={() => handleEdit(tarea)}
            key={tarea.id} style={styles.item}>
            <View>
                <Text style={styles.title}>{tarea.nombre}</Text>
                <Text style={styles.subtitle}>{tarea.fechaVencimiento}</Text>
            </View>
        </Pressable>
    </>)
};
export default TareaItem;