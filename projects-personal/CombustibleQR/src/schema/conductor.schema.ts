import * as yup from 'yup';

export const SchemaConductor = yup.object().shape({
    nombre: yup.string().required('Campo Requerido'),
    apellido: yup.string().required('Campo Requerido'),
    jerarquia: yup.string().required('Campo Requerido'),
    numeroLegajo: yup.string().required('Campo Requerido'),
    numeroCredencial: yup.string().required('Campo Requerido'),

  });