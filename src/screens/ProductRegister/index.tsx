import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Input,
  Loading,
  SectionTitle,
  PreviewImages,
} from '../../components';
import {addData} from '../../database';
import {UploadImageFromGallery} from '../../utils/uploadImages';

import {schema} from './schema';
import {
  Container,
  Form,
  Section,
  ContainerButton,
  UploadImage,
  Icon,
  Text,
  UploadButton,
  UploadButtonText,
  FormatText,
} from './styles';
import {uploadImagesCloudinary} from '../../service/api';
import {ImageProps} from '../../interfaces';

export function ProductRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImageProps[]>([]);
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleImages() {
    try {
      setLoading(true);
      const assets = await UploadImageFromGallery({limit: 5});
      setImages(prev => [...prev, ...assets]);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar imagens');
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister() {
    if (images.length === 0) {
      Alert.alert('Erro', 'Selecione pelo menos uma imagem');
      return;
    }
    try {
      setLoading(true);
      const imageUrls = await uploadImagesCloudinary(images);

      await addData({
        collection: 'products',
        data: {
          images: imageUrls,
          ...getValues(),
        },
      });
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar o produto');
    } finally {
      setLoading(false);
      navigation.navigate('RegistrationCompleted');
    }
  }

  return (
    <Container>
      <Form>
        <Section>
          <Input
            control={control}
            name="name"
            placeholder="Nome"
            error={errors.name && errors.name.message}
          />
          <Input
            control={control}
            name="description"
            placeholder="Descrição"
            error={errors.description && errors.description.message}
          />
          <Input
            control={control}
            name="version"
            placeholder="Versão"
            error={errors.version && errors.version.message}
          />
        </Section>

        <Section>
          <SectionTitle title="Adicionar Imagens" />
          <UploadImage>
            <Icon name="image" />
            <Text>Faça upload das imagens do produto</Text>
            <FormatText>JPG e PNG, somente</FormatText>
            <UploadButton onPress={() => handleImages()}>
              <UploadButtonText>Adicionar</UploadButtonText>
            </UploadButton>
          </UploadImage>
        </Section>
        {images.length > 0 && (
          <PreviewImages images={images} setImages={setImages} />
        )}
      </Form>

      <ContainerButton>
        <Button title="Salvar" onPress={handleSubmit(handleRegister)} />
      </ContainerButton>
      {loading && <Loading />}
    </Container>
  );
}
