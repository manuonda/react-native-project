import * as SQLite from 'expo-sqlite'
import {seed} from '../data/seed'

export const DatabaseConnection = {
    getConnection : ()  => SQLite.openDatabase("database.db", process.env.EXPO_VERSION_DB)
}

  /**
   * Funcion  que permite generar los registros 
   * de la base de datos
   */
 export const initSeedSql = async (): Promise<boolean> => {
    console.log("-- initSeedSql");
    const db = DatabaseConnection.getConnection();
    const list = seed.split(";");
    for ( const table of list) {
    db.transaction(tx => {
         //console.log("table  =>  ", table.trim() , "legth : ", table.trim().length);
        if ( table.trim() !== "" && table.trim().length > 0) {
          tx.executeSql(table, 
            [],
            (tx,results) => {
              console.log("Result SQL :" , results);
            },
            (error) => {
              console.log("Error SQL InitAutoGenerate: ", error);
              return false;
            });
        }
      
    }) 
  } 
   console.log("-- salid initSeedSql")
  return Promise.resolve(true);
}

