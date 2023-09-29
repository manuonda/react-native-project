import { DatabaseConnection } from "../database/connection"
import { CargaCombustible } from "../types/carga.combustible";
import { Tarea } from "../types/tarea.td";
import { DatabaseService } from "./database.service";


const db = DatabaseConnection.getConnection();
const table = "cargas";
const id = "id";

export const CargaCombustibleService = {

    guardar: async (entity: CargaCombustible):Promise<CargaCombustible> => {
       
        const sql = `insert into cargas(
            idEstacionServicio,
            estacionServicio,
            kilometraje,
            nivelTanque,
            litrosHabilitados,
            numeroRemito,
            idConductor,
            idVehiculo
            ) values(
                ?,?,?,?,
                ?,?,?,?
            )`;
        const params = [
            entity.idEstacionServicio,
            entity.estacionServicio,
            entity.kilometraje,
            entity.nivelTanque,
            entity.litrosHabilitados ,
            entity.numeroRemito,
            entity.idConductor,
            entity.idVehiculo
        ];
        try {
            const result: any  = await DatabaseService.executeSQL(sql, params);
            const { rows } = result;
            const { _array } = rows;
            const data = _array[0];
            let carga: CargaCombustible = {
                id : data.id,
                idEstacionServicio:data.idEstacionServicio,
                estacionServicio: data.estacionServicio,
                kilometraje: data.kilometraje,
                nivelTanque: data.nivelTanque,
                litrosHabilitados : data.litrosHabilitados ,
                numeroRemito :data.numeroRemito,
                idConductor: data.idConductor,
                idVehiculo : data.idVehiculo
            }
            return Promise.resolve(carga);
              
        }catch(error) {
          console.error('Error Save Carga : ', error);
          return Promise.resolve(null);
        }


    },

    update: async (tarea: Tarea, id: number) => {
       
        const sql = `update tareas set 
            nombre = ? , descripcion = ?, fechaVencimiento = ?,
            repetir = ?, nota = ? , filePath = ? , cameraPath = ?
            where id=${id}`;
        const params = [
            tarea.nombre,
            tarea.descripcion,
            tarea.fechaVencimiento,
            tarea.repetir,
            tarea.nota,
            tarea.filePath,
            tarea.cameraPath
        ];
        try {
            const result = await DatabaseService.executeSQL(sql, params);
            console.log("Resultado : ", result);
            return Promise.resolve(result);

        } catch (error) {
            console.error("Error save data: ", error);
            return Promise.reject(error);
        }


    },

    all: async ():Promise<CargaCombustible[]> => {
        const tareas: Tarea[] = [];
        const sql = "select * from tareas ";
        const result: any = await DatabaseService.executeSQL(sql, []);
        const { rows } = result;
        const { _array } = rows;
        for (const element of _array) {
            const data = element;
            const tarea: Tarea = {
                id: data.id,
                nombre: data.nombre,
                descripcion: data.descripcion,
                fechaVencimiento: data.fechaVencimiento,
                cameraPath: data.cameraPath,
                filePath: data.filePath,
                nota: data.nota,
                repetir: data.repetir
            };
           tareas.push(tarea);

        }

        return Promise.resolve(tareas);

    },

    findById: async (id: any): Promise<Tarea> => {
        const sql = `select * from tareas where id=${id}`;
        let tarea: Tarea = {
            id:id,
            nombre:'', 
            descripcion: '',
            fechaVencimiento: '',
            repetir: 0 ,
            nota: '',
            cameraPath: '',
            filePath:''
        };
        try {
            const result: any  = await DatabaseService.executeSQL(sql, []);
            const { rows } = result;
            const { _array } = rows;
            const dataTarea = _array[0];
            tarea = {
              id:dataTarea.id,
              nombre: dataTarea.nombre, 
              descripcion: dataTarea.descripcion, 
              fechaVencimiento: dataTarea.fechaVencimiento,
              repetir: dataTarea.repetir,
              nota: dataTarea.nota,
              cameraPath: dataTarea.cameraPath,
              filePath: dataTarea.filePath
            }
            return Promise.resolve(tarea);
              
        }catch(error) {
          console.error('Error findById : ', error);
          return Promise.resolve(null);
        }
    },
    deleteById: async  function(id:number): Promise<void> {
         const sql = `delete from tareas where id   =${id}`;
         try {
            const result: any = await DatabaseService.executeSQL(sql, []);
             
         } catch (error) {
            console.error('Error deleteById: ', error);
            return Promise.reject(error);
         } 
    },

}

