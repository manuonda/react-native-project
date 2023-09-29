import { create } from "zustand";
import { Conductor } from "../types/conductor.td";
import { Vehiculo } from "../types/vehiculo";
import { Combustible } from "../types/carga.combustible";

interface ICargaCombustible {
    conductorState: Conductor;
    vehiculoState: Vehiculo;
    combustibleState: Combustible,
    updateConductor: (conductor: any) => void;
    updateVehiculo :(vehiculo: Vehiculo) => void;
    updateCombustible: (combustible: Combustible) => void;
}
export const useCargaCombustibleStore = create<ICargaCombustible>((set) =>({
    conductorState: {id:23,apellido:'david garcia'},
    combustibleState: {id:null},
    vehiculoState: {id:null},
    updateConductor: (conductor: Conductor) => set({conductorState: conductor}),
    updateVehiculo: (vehiculo: Vehiculo) => set({vehiculoState: vehiculo}),
    updateCombustible:(combustible: Combustible) =>set({combustibleState: combustible}),
}));