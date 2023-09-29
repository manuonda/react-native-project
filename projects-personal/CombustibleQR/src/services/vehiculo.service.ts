import { DatabaseConnection } from "../database/connection"
import { Tarea } from "../types/tarea.td";
import { Vehiculo } from "../types/vehiculo";
import { DatabaseService } from "./database.service";


const db = DatabaseConnection.getConnection();
const table = "vehiculos";
const id = "id";

export const VehiculoService = {

    guardar: async (vehiculo: Vehiculo) => {
       
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
            dependecia,
            ) values(
                ?,?,?,?,?
                ?,?,?,?,?
            )`;
        const params = [
            vehiculo.idTipoVehiculo,
            vehiculo.tipoVehiculo,
            vehiculo.idTipoCombustible,
            vehiculo.tipoCombustible,
            vehiculo.numeroLegajo,
            vehiculo.numeroChasis,
            vehiculo.numeroMotor,
            vehiculo.chapaPatente,
            vehiculo.idDependencia,
            vehiculo.dependecia,
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


}

