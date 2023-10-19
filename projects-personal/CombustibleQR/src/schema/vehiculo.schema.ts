import * as yup from 'yup';

export const SchemaVehiculo = yup.object().shape({
    id: yup.number(),
    idTipoVehiculo: yup.number(),
    tipoVehiculo: yup.string().required('Campo Requerido'),
    idTipoCombustible: yup.number(),
    tipoCombustible: yup.string().required('Campo Requerido'),
    numeroLegajo: yup.string().required('Campo Requerido'),
    numeroChasis: yup.string().required('Campo Requerido'),
    numeroMotor: yup.string().required('Campo Requerido'),
    chapaPatente: yup.string().required('Campo Requerido'),
    idDependencia: yup.number(),
    dependencia: yup.string().required('Campo Requerido')
});