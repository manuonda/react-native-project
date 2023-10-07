import { DatabaseConnection } from "./seed.service"
import { CargaCombustible } from "../types/carga.combustible";
import { Conductor } from "../types/conductor.td";
import { Tarea } from "../types/tarea.td";
import { Vehiculo } from "../types/vehiculo";
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
            idVehiculo,
            idUsuario,
            fechaAlta
            ) values(
                ?,?,?,?,?,
                ?,?,?,?,?
            )`;
        const params = [
            entity.idEstacionServicio,
            entity.estacionServicio,
            entity.kilometraje,
            entity.nivelTanque,
            entity.litrosHabilitados ,
            entity.numeroRemito,
            entity.idConductor,
            entity.idVehiculo,
            entity.idUsuario,
            entity.fechaAlta

        ];
        try {
            const result: any  = await DatabaseService.executeSQL(sql, params);
            const { insertId } = result;
            console.log("result id carga : ", insertId);
            let carga: CargaCombustible = {
                id : insertId,
                idEstacionServicio:entity.idEstacionServicio,
                estacionServicio: entity.estacionServicio,
                kilometraje: entity.kilometraje,
                nivelTanque: entity.nivelTanque,
                litrosHabilitados : entity.litrosHabilitados ,
                numeroRemito :entity.numeroRemito,
                idConductor: entity.idConductor,
                idVehiculo : entity.idVehiculo
            }
            return Promise.resolve(carga);
              
        }catch(error) {
          console.error('Error Save Carga Combustible : ', error);
          return Promise.resolve(null);
        }


    },

    update: async (cargaCombustible: CargaCombustible):Promise<any>=> {
       
        // const sql = `update cargas set 
        //     nombre = ? , descripcion = ?, fechaVencimiento = ?,
        //     repetir = ?, nota = ? , filePath = ? , cameraPath = ?
        //     where id=${id}`;
        // const params = [
        //     tarea.nombre,
        //     tarea.descripcion,
        //     tarea.fechaVencimiento,
        //     tarea.repetir,
        //     tarea.nota,
        //     tarea.filePath,
        //     tarea.cameraPath
        // ];
        // try {
        //     const result = await DatabaseService.executeSQL(sql, params);
        //     console.log("Resultado : ", result);
        //     return Promise.resolve(result);

        // } catch (error) {
        //     console.error("Error save data: ", error);
        //     return Promise.reject(error);
        // }


    },

    all: async ():Promise<CargaCombustible[]> => {
        const cargas: CargaCombustible [] = [];
        let sql = `select 
          carga.id,
          carga.idEstacionServicio,
          carga.estacionServicio,
          carga.kilometraje,
          carga.nivelTanque,
          carga.litrosHabilitados ,
          carga.numeroRemito,
          carga.idConductor,
          carga.idVehiculo,
          carga.idUsuario,
          carga.fechaAlta as fechaAltaCarga,
          carga.fechaModificacion as fechaModificacionCarga,
          
          conductor.nombre, 
          conductor.apellido, 
          conductor.jerarquia,
          conductor.numeroLegajo, 
          conductor.numeroCredencial,
          conductor.ejemplar,

          vehiculo.idTipoVehiculo,
          vehiculo.tipoVehiculo,
          vehiculo.idTipoCombustible,
          vehiculo.tipoCombustible,
          vehiculo.numeroLegajo,
          vehiculo.numeroChasis,
          vehiculo.numeroMotor,
          vehiculo.chapaPatente,
          vehiculo.idDependencia,
          vehiculo.dependencia

         from cargas carga 
         inner join vehiculos vehiculo on vehiculo.id=carga.idVehiculo 
         inner join conductores conductor on conductor.id=carga.idConductor       
        `;
        //sql = "select * from cargas";
        console.log("sql : ", sql);
        console.log("")
        const result: any = await DatabaseService.executeSQL(sql, []);
        const { rows } = result;
        const { _array } = rows;
        //console.log("array values : ",_array);
        for (const element of _array) {
            const data = element;
            const conductor:Conductor = {
                id: data.idConductor,
                nombre:data.nombre, 
                apellido:data.apellido, 
                jerarquia:data.jerarquia,
                numeroLegajo:data.numeroLegajo, 
                numeroCredencial:data.numeroCredencial,
                ejemplar:data.ejemplar
            };

            const vehiculo:Vehiculo = {
                id: data.idVehiculo,
                idTipoVehiculo:data.idTipoVehiculo,
                tipoVehiculo:data.tipoVehiculo,
                idTipoCombustible:data.idTipoCombustible,
                tipoCombustible:data.tipoCombustible,
                numeroLegajo:data.numeroLegajo,
                numeroChasis:data.numeroChasis,
                numeroMotor:data.numeroMotor,
                chapaPatente:data.chapaPatente,
                idDependencia:data.idDependencia,
                dependencia:data.dependencia
            }
            const carga: CargaCombustible = {
                id:data.id,
                idEstacionServicio:data.idEstacionServicio,
                estacionServicio:data.estacionServicio,
                kilometraje:data.kilometraje,
                nivelTanque:data.nivelTanque,
                litrosHabilitados: data.litrosHabilitados ,
                numeroRemito:data.numeroRemito,
                idConductor:data.idConductor,
                idVehiculo:data.idVehiculo,
                idUsuario:data.idUsuario,
                fechaAlta:data.fechaAltaCarga,
                fechaModificacion:data.fechaModificacionCarga,
                conductor,
                vehiculo
            };
            console.log("carga => ", carga);
           cargas.push(carga);
        }
        return Promise.resolve(cargas);

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
    deleteById: async  function(id:number): Promise<boolean> {
         const sql = `delete from cargas where id   =${id}`;
         try {
            const result: any = await DatabaseService.executeSQL(sql, []);
            const {rowsAffected} = result;
            console.log("rows affected", rowsAffected);
            if ( parseInt(rowsAffected) > 0 ) {
            console.log("Result delete : "+ result);
               return Promise.resolve(true);  
           } else {
               return Promise.resolve(false);
            }
             
         } catch (error) {
            console.error('Error deleteById: ', error);
            return Promise.reject(error);
         } 
    },

}

