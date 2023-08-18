import AsyncStorage from "@react-native-async-storage/async-storage"
import { USUARIO_STORAGE } from "./constants"

/**
 * Funcion que permite guardar dentro del 
 * storage de la app mobile el value , por 
 * la key correspondiente
 * @param key 
 * @param value 
 * @returns 
 */
const storeData = async( key : string, value: string):Promise<boolean>  => {
    try {
        await AsyncStorage.setItem(key,value);
        return Promise.resolve(true);
    } catch (error) {
       console.error("Error Storage Data : ", error);
       return Promise.resolve(false); 
    }
}


/**
 * Funcion que permite 
 * devolver un valor a partir 
 * del key dentro del storage mobile
 * @param key 
 */
const getData = (key:string): Promise<string> => {
    try {
        const value =  AsyncStorage.getItem(key);
        if( value !== null ) {
            return Promise.resolve(value);
        }
        return Promise.resolve("");
    } catch (error) {
        console.error("Error get Value : ", key);
        Promise.resolve("");
    }
}