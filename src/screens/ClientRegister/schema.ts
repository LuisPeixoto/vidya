import * as Yup from 'yup';

export const schema = Yup.object().shape({
  cnpj: Yup.string().required('O campo CNPJ é obrigatório.'),
  socialReason: Yup.string().required('O campo Razão Social é obrigatório.'),
  fantasyName: Yup.string()
    .required('O campo Nome Fantasia é obrigatório.')
    .max(50, 'O campo Nome Fantasia deve ter no máximo 50 caracteres.'),
  cep: Yup.string()
    .required('O campo CEP é obrigatório.')
    .min(8, 'O campo CEP deve ter no mínimo 8 caracteres.'),
  state: Yup.string().required('O campo Estado é obrigatório.'),
  city: Yup.string().required('O campo Cidade é obrigatório.'),
  district: Yup.string().required('O campo Bairro é obrigatório.'),
  address: Yup.string().required('O campo Logradouro é obrigatório.'),
  number: Yup.string().required('O campo Número é obrigatório.'),
  email: Yup.string()
    .required('O campo Email é obrigatório.')
    .email('O campo Email não é válido.'),
  telephone: Yup.string().required('O campo Telefone é obrigatório.').min(1),
});
