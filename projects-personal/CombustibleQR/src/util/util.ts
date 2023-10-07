import { Conductor } from "../types/conductor.td";
import { Vehiculo } from "../types/vehiculo";

export const isTipoCarga = (cadena :string , tipo:string )  => {
    const jsonData = JSON.parse(cadena);
    return jsonData.tipo === tipo;
}

export const converToConductor = ( cadena : string): Conductor => {
  const jsonData = JSON.parse(cadena);
  let conductor;
  try {
     let conductor: Conductor = {
        nombre: jsonData.nombre,
        apellido: jsonData.apellido,
        jerarquia: jsonData.jerarquia,
        numeroLegajo: jsonData.numeroLegajo,
        numeroCredencial: jsonData.numeroCredencial,
        ejemplar: jsonData.ejemplar
    };

    return conductor;
  }catch(e) {
    throw new Error("Error Convirtiendo datos QR Conductor ",e); 
  }
}

export const converToVehiculo = ( cadena : string): Vehiculo => {
    const jsonData = JSON.parse(cadena);
  
    let vehiculo;
    try {
      vehiculo = {
        idTipoVehiculo:jsonData.idTipoVehiculo,
        tipoVehiculo: jsonData.tipoVehiculo,
        idTipoCombustible: jsonData.idTipoCombustible,
        tipoCombustible: jsonData.tipoCombustible,
        numeroLegajo: jsonData.numeroLegajo,
        numeroChasis: jsonData.numeroChasis,
        numeroMotor: jsonData.numeroMotor,
        chapaPatente: jsonData.chapaPatente,
        idDependencia: jsonData.idDependencia,
        dependencia: jsonData.dependencia
      };
  
      return vehiculo;
    }catch(e) {
      throw new Error("Error Convirtiendo datos QR Conductor ",e); 
    }
  }