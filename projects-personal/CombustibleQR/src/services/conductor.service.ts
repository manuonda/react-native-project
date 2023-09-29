import { DatabaseConnection } from "../database/connection"
import { Conductor } from "../types/conductor.td";
import { Tarea } from "../types/tarea.td";
import { DatabaseService } from "./database.service";


const db = DatabaseConnection.getConnection();
const table = "conductores";
const id = "id";

export const ConductorService = {

    guardar: async (conductor: Conductor):Promise<Conductor> => {
       
        const sql = `insert into conductores(
            nombre, apellido, jerarquia,
            numeroLegajo, numeroCredencial,ejemplar
            ) values(
              ?,?,?,?,?,?  
            )`;
        const params = [
            conductor.nombre,
            conductor.apellido,
            conductor.jerarquia,
            conductor.numeroLegajo,
            conductor.numeroCredencial,
            conductor.ejemplar
        ];
        try {
            const result = await DatabaseService.executeSQL(sql, params);
            return Promise.resolve(result);

        } catch (error) {
            console.error("Error save data conductor: ", error);
            return Promise.reject(error);
        }


    },
}

