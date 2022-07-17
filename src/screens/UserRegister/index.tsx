import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Modal} from 'react-native';

import {Button, Input} from '../../components';
import {ItemSelectButton} from '../../components/ItemSelectButton';
import {ClientRegisterProps} from '../ClientRegister';
import {ItemSelect} from '..';
import {ProductRegisterProps} from '../ProductRegister';
import {Container, Form, Section, ContainerButton} from './styles';

export interface UserRegisterProps {
  name: string;
  client: ClientRegisterProps;
  product: ProductRegisterProps;
}

export function UserRegister() {
  const [itemModalOpen, setItemCategoryModalOpen] = useState<boolean>(false);
  const [selectType, setSelectType] = useState<'client' | 'product'>('client');
  const [products, setProducts] = useState<ProductRegisterProps[]>([]);
  const [clients, setClients] = useState<ClientRegisterProps[]>([]);

  const [selectedProduct, SetSelectedProduct] =
    useState<ProductRegisterProps | null>(null);
  const [selectedClient, SetSelectedClient] =
    useState<ClientRegisterProps | null>(null);
  const navigation = useNavigation<any>();

  function handleOpenSelectItemModal(type: 'client' | 'product') {
    setProducts([
      {
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        version: '1.0',
      },
      {
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        version: '1.0',
      },
      {
        name: 'Produto 3',
        description: 'Descrição do produto 3',
        version: '1.0',
      },
    ]);
    setSelectType(type);
    setItemCategoryModalOpen(true);
  }

  function handleCloseSelectItemModal() {
    setItemCategoryModalOpen(false);
  }

  function HandleSelectedProduct(product: ProductRegisterProps) {
    console.log(product);
    SetSelectedProduct(product);
  }

  function HandleSelectedClient(client: ClientRegisterProps) {
    SetSelectedClient(client);
  }

  return (
    <Container>
      <Form>
        <Section>
          <Input placeholder="Nome" />
          <ItemSelectButton
            title={selectedClient?.nomeFantasia ?? 'Selecione um cliente'}
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
      <ContainerButton>
        <Button title="Salvar" />
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
