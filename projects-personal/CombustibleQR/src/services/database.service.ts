import * as Sql from "expo-sqlite"
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

//const db = DatabaseConnection.getConnection();
const db = Sql.openDatabase("database.db");



/**
 * Funcion que permite ejecutar solamente la consulta sql
 * @param sql 
 */
export const DatabaseService = {
   
   executeSQL: async (sql: string, args: any) => {
      return new Promise((resolve, reject) => {
         db.transaction(
            function(tx){
               tx.executeSql(sql, args, (tx, result) => {
                  console.log("tx.executeSql : ", result);
                  return resolve(result);
               },function(tx, error) {
                  console.error("Error executing : ", error);
                  return false;
               })
            }, error => {
                console.log(" Error executeSQL : ", error);
            }, () => {
               //console.log("success db")  
            }
         );
      })
   }
}

