import React, {useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {Alert, ImageProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Input, Loading, SectionTitle} from '../../components';
import {
  Container,
  Form,
  Section,
  ContainerButton,
  Logo,
  Image,
  ButtonGallery,
  Icon,
} from './styles';
import {
  cepMask,
  cnpjMask,
  emailMask,
  numberMask,
  phoneMask,
} from '../../utils/mask';
import {schema} from './schema';
import {cepApi, cnpjApi, uploadImagesCloudinary} from '../../service/api';
import {addData} from '../../database';
import {UploadImageFromGallery} from '../../utils/uploadImages';

export function ClientRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<ImageProps | null>(null);
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleCNPJChanged() {
    try {
      const {
        nome,
        fantasia,
        telefone,
        email,
        cep,
        municipio,
        uf,
        logradouro,
        numero,
        bairro,
      } = await (
        await cnpjApi(getValues('cnpj').replace(/\D/g, ''))
      ).data;

      setValue('socialReason', nome);
      setValue('fantasyName', fantasia);
      setValue('telephone', telefone);
      setValue('email', email);
      setValue('cep', cep);
      setValue('city', municipio);
      setValue('state', uf);
      setValue('address', logradouro);
      setValue('number', numero);
      setValue('district', bairro);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCepChanged() {
    try {
      const {logradouro, bairro, uf, localidade} = await (
        await cepApi(getValues('cep').replace(/\D/g, ''))
      ).data;
      setValue('state', uf);
      setValue('city', localidade);
      setValue('address', logradouro);
      setValue('district', bairro);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleImage() {
    try {
      setLoading(true);
      const asset = await UploadImageFromGallery({limit: 1});
      setImage(asset[0]);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar imagem');
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister() {
    if (!image) {
      Alert.alert('Erro', 'Selecione a logo do cliente');
      return;
    }
    try {
      setLoading(true);
      const imageUrl = await uploadImagesCloudinary([image]);
      await addData({
        collection: 'clients',
        data: {
          image: imageUrl[0],
          ...getValues(),
        },
      });
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar cliente');
    } finally {
      setLoading(false);
      navigation.navigate('RegistrationCompleted');
    }
  }

  return (
    <Container>
      <Form>
        <Logo>
          <Image
            source={{
              uri: image
                ? image?.uri
                : 'https://res.cloudinary.com/luispeixoto/image/upload/v1658177321/gj6cvrhezqw6ojrdvdfc.png',
            }}
          />
          <ButtonGallery onPress={() => handleImage()}>
            <Icon name="camera" />
          </ButtonGallery>
        </Logo>
        <Section>
          <Input
            control={control}
            name="cnpj"
            placeholder="CNPJ"
            blur={() => handleCNPJChanged()}
            mask={cnpjMask}
            error={errors.CNPJ && errors.CNPJ.message}
          />
          <Input
            control={control}
            name="socialReason"
            placeholder="Razão Social"
            error={errors.RazaoSocial && errors.RazaoSocial.message}
          />
          <Input
            control={control}
            name="fantasyName"
            placeholder="Nome Fantasia"
            error={errors.NomeFantasia && errors.NomeFantasia.message}
          />
        </Section>

        <Section>
          <SectionTitle title="Localização" />
          <Input
            control={control}
            name="cep"
            placeholder="CEP"
            blur={() => handleCepChanged()}
            mask={cepMask}
            error={errors.cep && errors.cep.message}
          />
          <Input
            control={control}
            name="state"
            placeholder="Estado"
            error={errors.state && errors.state.message}
          />
          <Input
            control={control}
            name="city"
            placeholder="Cidade"
            error={errors.city && errors.city.message}
          />
          <Input
            control={control}
            name="district"
            placeholder="Bairro"
            error={errors.district && errors.district.message}
          />
          <Input
            control={control}
            name="address"
            placeholder="Logradouro"
            error={errors.address && errors.address.message}
          />
          <Input
            control={control}
            name="number"
            placeholder="Número"
            error={errors.number && errors.number.message}
            mask={numberMask}
          />
        </Section>

        <Section>
          <SectionTitle title="Contato" />
          <Input
            control={control}
            name="email"
            placeholder="Email"
            mask={emailMask}
            error={errors.email && errors.email.message}
          />
          <Input
            control={control}
            name="telephone"
            placeholder="Telefone"
            mask={phoneMask}
            error={errors.telephone && errors.telephone.message}
          />
        </Section>
      </Form>
      <ContainerButton>
        <Button title="Salvar" onPress={handleSubmit(handleRegister)} />
      </ContainerButton>
      {loading && <Loading />}
    </Container>
  );
}
