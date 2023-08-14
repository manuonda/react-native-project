import { useNavigation } from "expo-router";
import React , {useEffect, useState } from "react";
import { View , Text, FlatList} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useHeaderHeight } from '@react-navigation/elements';
import DoctorListItem from "./components/DoctorCardRNPaper";
import searchData from '../data/search.json'
import DoctorCardRNPaper from "./components/DoctorCardRNPaper";
import DoctorCard from "./components/DoctorCard";



const Stack = createNativeStackNavigator();

export default function SearchScreen() {
    const navigation = useNavigation();
    const[search, setSearch] = useState("");
    const[filteredDoctors, setFilteredDoctors] = useState();
    const headerHeigth = useHeaderHeight();


    React.useLayoutEffect(() => {
        navigation.setOptions({
        
            headerSearchBarOptions: {
             
            onChangeText: (event) => setSearch(event.nativeEvent.text),
          },
        });
      }, [navigation]);
    
      useEffect(() => {
          console.log("searchScreen :" , search);
         setFilteredDoctors( searchData.filter((d) => 
            d.name.toLowerCase().includes(search.toLowerCase())
         )
        ); 
      },[search])
      
     return(
            <FlatList  
                style={{backgroundColor:"white", flex: 1}}
                data={filteredDoctors} 
                renderItem={({item}) => <DoctorCard {...item}/>}
                contentInsetAdjustmentBehavior="automatic"
            />
     )
}