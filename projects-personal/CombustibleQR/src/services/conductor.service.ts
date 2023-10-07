import { DatabaseConnection } from "./seed.service"
import { Conductor } from "../types/conductor.td";
import { DatabaseService } from "./database.service";


const db = DatabaseConnection.getConnection();
const table = "conductores";
const id = "id";

export const ConductorService = {

    guardar: async (entity: Conductor):Promise<Conductor> => {
       
        const sql = `insert into conductores(
            nombre, apellido, jerarquia,
            numeroLegajo, numeroCredencial,
            ejemplar
            ) values(
              ?,?,?,?,?,?  
            )`;
        const params = [
            entity.nombre,
            entity.apellido,
            entity.jerarquia,
            entity.numeroLegajo,
            entity.numeroCredencial,
            entity.ejemplar
        ];
        let conductor: Conductor = {};
        try {
            const result: any  = await DatabaseService.executeSQL(sql, params);
            const { insertId } = result;
            conductor = {
              id: insertId,
              nombre    :entity.nombre,
              apellido  :entity.apellido,
              jerarquia  :entity.jerarquia,
              numeroLegajo  :entity.numeroLegajo,
              numeroCredencial  :entity.numeroCredencial,
              ejemplar  :entity.ejemplar
            }
            return Promise.resolve(conductor);
              
        }catch(error) {
          console.error('Error Save Conductor : ', error);
          return Promise.resolve(null);
        }

    },
}

