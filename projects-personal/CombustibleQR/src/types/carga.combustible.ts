import { Conductor } from "./conductor.td";
import { Vehiculo } from "./vehiculo";

export type CargaCombustible = {
    id?: number;
    idEstacionServicio?: string;
    estacionServicio?: string;
    kilometraje?: string;
    nivelTanque?: string;
    litrosHabilitados ?: string;
    numeroRemito?: string;
    idConductor?: number;
    idVehiculo?: number;
    conductor?: Conductor,
    vehiculo?: Vehiculo,
    idUsuario?: number;
    fechaAlta?: string;
    fechaModificacion?: string;

}