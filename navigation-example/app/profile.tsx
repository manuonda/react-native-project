import {View, Text, Button } from 'react-native'
import { Stack, useRouter, useSearchParams} from 'expo-router'
type PropfileProps = {}



export default function Profile(){
    const router= useRouter();
    
    const {name, username} = useSearchParams();
    console.log(name,username);
    return(

        <View style={{flex: 1, alignItems:'center', justifyContent: 'center',}}>
         <Stack.Screen 
           options={{ 
               headerStyle: {backgroundColor: '#1E2632'},
               headerTintColor: '#FFE030'
            }}
         />
         <Text style={{fontSize:30}}>Profile Page</Text>
         <Text style={{fontSize:10, color:'gray'}}>
            {name} - {username}
         </Text>
         <Button onPress={() => router.back()}  title='Go to Back'></Button>
        </View>
    )
}