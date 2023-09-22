import * as SQLite from 'expo-sqlite'
import {seed} from '../data/seed'

export const DatabaseConnection = {
    getConnection : ()  => SQLite.openDatabase("database.db", process.env.EXPO_VERSION_DB)
}

  /**
   * Funcion  que permite generar los registros 
   * de la base de datos
   */
 export const initAutogenerate = async () => {
    console.log("initAutogenerate");
    const db = DatabaseConnection.getConnection();
    console.log("seed : " + seed);
    db.transaction(tx => {
      tx.executeSql(seed, 
      [],
      (tx,results) => {
        console.log("Result :" , results);
      },
      (error) => {
        console.log("Error: ", error);
        return true;
      });
    })  
  }

