import { DatabaseConnection } from "./seed.service"
import { Tarea } from "../types/tarea.td";
import { Vehiculo } from "../types/vehiculo";
import { DatabaseService } from "./database.service";


const db = DatabaseConnection.getConnection();
const table = "vehiculos";
const id = "id";

export const VehiculoService = {

        guardar: async (entity: Vehiculo) => {
       
        const sql = `insert into vehiculos(
            idTipoVehiculo,
            tipoVehiculo,
            idTipoCombustible,
            tipoCombustible,
            numeroLegajo,
            numeroChasis,
            numeroMotor,
            chapaPatente,
            idDependencia,
            dependencia
            ) values(
                ?,?,?,?,?,
                ?,?,?,?,?
            )`;
        const params = [
            entity.idTipoVehiculo,
            entity.tipoVehiculo,
            entity.idTipoCombustible,
            entity.tipoCombustible,
            entity.numeroLegajo,
            entity.numeroChasis,
            entity.numeroMotor,
            entity.chapaPatente,
            entity.idDependencia,
            entity.dependencia,
        ];
        try {
            const result: any  = await DatabaseService.executeSQL(sql, params);
            const { insertId } = result;
            let vehiculo:Vehiculo = {
                id : insertId,
                idTipoVehiculo:entity.idTipoVehiculo,
                tipoVehiculo:entity.tipoVehiculo,
                idTipoCombustible:entity.idTipoCombustible,
                tipoCombustible:entity.tipoCombustible,
                numeroLegajo:entity.numeroLegajo,
                numeroChasis:entity.numeroChasis,
                numeroMotor:entity.numeroMotor,
                chapaPatente:entity.chapaPatente,
                idDependencia:entity.idDependencia,
                dependencia:entity.dependencia,
            }
            return Promise.resolve(vehiculo);
              
        }catch(error) {
          console.error('Error save Vehiculo : ', error);
          throw new Error("Error saving Vehiculo : ", error);
        }

    },


}

