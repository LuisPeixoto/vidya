import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ListCard, Loading} from '../../components';
import {getData} from '../../database';
import {IClient, IProduct, IUser} from '../../interfaces';
import {Container, Products} from './styles';

export function ListUser() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  async function loadData() {
    try {
      setLoading(true);
      Promise.all([
        getData({collection: 'clients'}),
        getData({collection: 'products'}),
        getData({collection: 'users'}),
      ]).then(([clientsData, productsData, usersData]) => {
        setClients(clientsData);
        setProducts(productsData);
        setUsers(usersData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  function getUserByClientByProduct(client: IClient) {
    const usersClient = users.filter(user => {
      return user.client === client.id;
    });

    const usersProduct = [];

    usersClient.forEach(user => {
      const item = products.find(element => {
        return element.id === user.product;
      });
      if (item) {
        usersProduct.push({
          ...user,
          products: item,
        });
      }
    });
    const usersProductGroup = usersProduct.reduce((acc, curr) => {
      const key = curr.products.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});

    const usersProductGroupArray = Object.keys(usersProductGroup).map(key => {
      return {
        title: key,
        data: usersProductGroup[key],
      };
    });

    return {usersProductGroupArray};
  }

  function handleNavigateListUserByProduct(client: IClient) {
    const {usersProductGroupArray} = getUserByClientByProduct(client);
    navigation.navigate('ListUserByProduct', {
      client,
      usersProduct: usersProductGroupArray,
    });
  }

  return (
    <>
      <Container>
        <Products
          data={clients}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ListCard
              key={item.id}
              title={item.fantasyName}
              info={[item.socialReason, item.cnpj]}
              onPress={() => handleNavigateListUserByProduct(item)}
            />
          )}
        />
      </Container>
      {loading && <Loading />}
    </>
  );
}
