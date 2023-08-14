import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <Searchbar value="informaciion" placeholder="Search Bar"/> */}
        <Link href={"/search"} asChild>
        <Pressable style={styles.searchBar}>
          <Text>Search for doctors , appointments...</Text>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>

        </Link>
        <Text style={styles.title}>Hola Mundo mis datos de la vida</Text>
        <Text style={styles.subtitle}>Modificacion de primear pagina.</Text>
        <Link href={"/search"}>Search</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "white",
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

  searchBar: {
     borderWidth: StyleSheet.hairlineWidth,
     padding:10,
     borderRadius:50,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
  }
});
