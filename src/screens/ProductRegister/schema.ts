import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  description: Yup.string().required('O campo descrição é obrigatório'),
  version: Yup.string().required('O campo versão é obrigatório'),
});
