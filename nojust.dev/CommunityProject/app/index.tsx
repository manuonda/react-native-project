import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { appointments } from "../data/appointments";
import AppointmentItem from "./components/AppointmentItem";

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href={"/search"} asChild>
        <Pressable style={styles.searchBar}>
          <Text>Search for doctors , appointments...</Text>
          <AntDesign name="search1" size={20} color="black" />
        </Pressable>

        </Link>
        <Text style={styles.title}>Upcoming appointments</Text>
        <FlatList
          style={{backgroundColor:"white", flex:1}}
          data={appointments}
          renderItem={(item) => <AppointmentItem  appointment={item}/> }
          contentInsetAdjustmentBehavior="automatic"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    padding: 12,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignItems:"center"
  },
  searchBar: {
     borderWidth: StyleSheet.hairlineWidth,
     padding:10,
     borderRadius:50,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: 10,
  }
});
