import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Modal} from 'react-native';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Input, ItemSelectButton, Loading} from '../../components';
import {ItemSelect} from '..';
import {Container, Form, Section, ContainerButton} from './styles';
import {schema} from './schema';
import {addData, getData} from '../../database';
import {IClient, IProduct} from '../../interfaces';

export function UserRegister() {
  const [itemModalOpen, setItemCategoryModalOpen] = useState<boolean>(false);
  const [selectType, setSelectType] = useState<'client' | 'product'>('client');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [productError, setProductError] = useState<boolean>(false);
  const [clientError, setClientError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedProduct, SetSelectedProduct] = useState<IProduct | null>(null);
  const [selectedClient, SetSelectedClient] = useState<IClient | null>(null);
  const navigation = useNavigation<any>();

  const route = useRoute();

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleOpenSelectItemModal(type: 'client' | 'product') {
    setSelectType(type);
    setItemCategoryModalOpen(true);
  }

  function handleCloseSelectItemModal() {
    setItemCategoryModalOpen(false);
  }

  function HandleSelectedProduct(product: IProduct) {
    SetSelectedProduct(product);
    setProductError(false);
  }

  function HandleSelectedClient(client: IClient) {
    SetSelectedClient(client);
    setClientError(false);
  }
  async function handleRegister() {
    if (selectedProduct === null) {
      Alert.alert('Selecione um produto');
      setProductError(true);
      return null;
    }

    if (selectedClient === null) {
      Alert.alert('Selecione um cliente');
      setClientError(true);
      return null;
    }

    if (!productError && !clientError) {
      try {
        setLoading(true);
        await addData({
          collection: 'users',
          data: {
            client: selectedClient?.id,
            product: selectedProduct?.id,
            ...getValues(),
          },
        });
      } catch (error) {
        Alert.alert('Erro', 'Erro ao cadastrar o usuário');
      } finally {
        setLoading(false);
        navigation.navigate('RegistrationCompleted');
      }
    }
  }

  useEffect(() => {
    if (route.params?.client) {
      SetSelectedClient(route.params?.client);
    }
    function loadData() {
      Promise.all([
        getData({collection: 'clients'}),
        getData({collection: 'products'}),
      ]).then(([clientsData, productsData]) => {
        setClients(clientsData);
        setProducts(productsData);
      });
    }

    loadData();
  }, []);

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
          <ItemSelectButton
            title={selectedClient?.fantasyName ?? 'Selecione um cliente'}
            error={(errors.name && !selectedClient) || clientError}
            onPress={
              clients.length > 0
                ? () => handleOpenSelectItemModal('client')
                : () => {
                    Alert.alert('Atenção', 'Nenhum cliente cadastrado', [
                      {text: 'Ok'},
                    ]);
                  }
            }
          />
          <ItemSelectButton
            title={selectedProduct?.name ?? 'Selecione um Produto'}
            error={(errors.name && !selectedProduct) || productError}
            onPress={
              products.length > 0
                ? () => handleOpenSelectItemModal('product')
                : () => {
                    Alert.alert('Atenção', 'Nenhum produto cadastrado', [
                      {text: 'Ok'},
                    ]);
                  }
            }
          />
        </Section>
      </Form>
      {loading && <Loading />}
      <ContainerButton>
        <Button title="Salvar" onPress={handleSubmit(handleRegister)} />
      </ContainerButton>
      <Modal animationType="fade" visible={itemModalOpen} transparent>
        <ItemSelect
          item={selectType === 'client' ? clients : products}
          type={selectType}
          setItem={
            selectType === 'client'
              ? HandleSelectedClient
              : HandleSelectedProduct
          }
          closeSelectItem={() => handleCloseSelectItemModal()}
        />
      </Modal>
    </Container>
  );
}
