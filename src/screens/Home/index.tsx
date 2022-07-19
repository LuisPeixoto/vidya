import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Header, CategoryList, Loading, RegisterButton} from '../../components';
import {getData} from '../../database';

import {Container, List} from './styles';

export function Home() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('SelectRegistrationCategory');
  }

  function loadData() {
    setLoading(true);
    try {
      Promise.all([
        getData({collection: 'clients', limit: 4}),
        getData({collection: 'products', limit: 4}),
      ]).then(([clientsData, productsData]) => {
        setData([
          {
            title: 'Clientes',
            data: clientsData,
          },
          {
            title: 'Produtos',
            data: productsData,
          },
        ]);
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

  return (
    <>
      <Container>
        <List
          ListHeaderComponent={() => <Header />}
          data={data}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => {
            return (
              <CategoryList key={index} title={item.title} data={item.data} />
            );
          }}
        />
        <RegisterButton onPress={() => handleRegister()} />
      </Container>
      {loading && <Loading />}
    </>
  );
}
