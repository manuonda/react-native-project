import { create } from "zustand";
import { Conductor } from "../types/conductor.td";
import { Vehiculo } from "../types/vehiculo";
import { CargaCombustible } from "../types/carga.combustible";

interface ICargaCombustible {
    conductorState: Conductor;
    vehiculoState: Vehiculo;
    combustibleState: CargaCombustible,
    updateConductor: (conductor: any) => void;
    updateVehiculo :(vehiculo: Vehiculo) => void;
    updateCombustible: (combustible: CargaCombustible) => void;
    reset:() => void;
    cargas: Array<CargaCombustible>;
    setCargas:(cargas:Array<CargaCombustible>) => void;
}
export const useCargaCombustibleStore = create<ICargaCombustible>((set) =>({
    conductorState: {id:null},
    combustibleState: {id:null},
    vehiculoState: {id:null},
    cargas:[],
    updateConductor: (conductor: Conductor) => set({conductorState: conductor}),
    updateVehiculo: (vehiculo: Vehiculo) => set({vehiculoState: vehiculo}),
    updateCombustible:(combustible: CargaCombustible) =>set({combustibleState: combustible}),
    reset:() => set({
        conductorState:{id:null},
        vehiculoState:{id:null},
        combustibleState:{id:null}
    }),
    setCargas:(cargas:Array<CargaCombustible>) => set({cargas: cargas})
}));