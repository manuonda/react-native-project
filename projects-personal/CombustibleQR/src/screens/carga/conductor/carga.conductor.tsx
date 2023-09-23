import { useState } from "react";
import CargaItem from "../components/carga.item";
import { Conductor } from "../../../types/conductor.td";


export default function CargaConductor({ navigation, route }) {
   
   const [conductor, setConductor] = useState<Conductor>({
      id: null
   });


   const handleChange =(name,e) => {
      setConductor({
         ...conductor,
         [name]:e
      });
   }

   
   return(
    <>
      <CargaItem 
        label={"Nombre"}
        name={"nombre"}
        value={conductor.nombre}
        setChange={handleChange}
      />


     <CargaItem 
        label={"Apellido"}
        name={"apellido"}
        value={conductor.apellido}
        setChange={handleChange}
      />

     <CargaItem 
        label={"Jerarquia"}
        name={"jerarquia"}
        value={conductor.jerarquia}
        setChange={handleChange}
      />

      <CargaItem 
        label={"Numero de Legajo"}
        name={"numeroLegajo"}
        value={conductor.numeroLegajo}
        setChange={handleChange}
      />

      <CargaItem 
        label={"Numero de Credencial"}
        name={"numeroCredencial"}
        value={conductor.numeroCredencial}
        setChange={handleChange}
       />
      
      

    </>
   )
}