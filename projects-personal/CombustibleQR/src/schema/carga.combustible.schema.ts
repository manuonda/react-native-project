

import * as yup from 'yup';

export const SchemaCargaCombustible = yup.object().shape({
   id: yup.number(),
   idEstacionServicio: yup.string().notRequired(),
   estacionServicio: yup.string().required('Campo Requerido'),
   kilometraje: yup.string().required('Campo Requerido'),
   nivelTanque: yup.string().required('Campo Requerido'),
   litrosHabilitados : yup.string().required('Campo Requerido'),
   numeroRemito: yup.string().required('Campo Requerido'),
   idConductor:  yup.number(),
   idVehiculo:  yup.number(),
   idUsuario:  yup.number(),
   fechaAlta: yup.string(),
   fechaModificacion: yup.string().notRequired(),
});