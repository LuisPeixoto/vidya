import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .required('O campo email é obrigatório')
    .email('Email inválido'),
  password: Yup.string()
    .required('O campo senha é obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});
