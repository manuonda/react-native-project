import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const users = [
  {
      id: 1, 
      username:'vadim',
      name:'david'
  },{
     id:2,
     username:'manuonda',
     name:'andres' 
  }]

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen  options={{title:'Home'}}/>
     
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/profile?name=Vadime&surname=Informacoin23">PROFIEL</Link>

        <Link href={{pathname:'/profile', params:{name:'davdid,', surname:'garcia' }}}>PROFIEL</Link>
          
          {users.map((user) => (
             <Link href={{ 
                     pathname:'/profile', 
                     params:{...user}
                  }}
                  key={user.id}>
              {user.name}
             </Link>  
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
