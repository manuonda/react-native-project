import {Stack, Tabs, useRouter} from 'expo-router'
import {AntDesign} from '@expo/vector-icons'
import {Alert} from 'react-native'

//export default Tabs;


export default function Layout(){
    const router = useRouter();
    return(
       <Stack 
         screenOptions={{
            title:'Title',
            headerStyle:{ 
                 backgroundColor: '#FFE030'
            },
            headerTintColor: '#1E2632',
            headerTitleStyle :{
              fontWeight: 'bold'
            }
            
         }}
       >
       <Stack.Screen name="index" options={{
         title: 'Home',
         headerRight: () => (
                <AntDesign
                 onPress={() => router.push('/modal')}
                 name="infocirlceo"  size={24}
                 color="black"/>
            )
        }}/>
       <Stack.Screen name="profile" options={{title:'Profile'}} />
       <Stack.Screen name="modal" options={{
           title:'Modal' , 
           presentation:'modal',
           headerStyle: {
             backgroundColor:'white'
           },
           headerTintColor: '#1E2632'
           }} />
       <Stack.Screen 
          name="home"
          options={{
            headerShown: false
          }}
       />
      </Stack>
    )
    
}