import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ListCard, Loading, RegisterButton} from '../../components';
import {getData} from '../../database';
import {IClient, IProduct, IUser} from '../../interfaces';

import {Container, Products} from './styles';

interface DataProps {
  item: IClient | IProduct | IUser;
  dataList: {
    title: string;
    info: string[];
    version?: string;
  };
}

interface ListProps {
  title: string;
  collection: string;
}

export function List() {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const {title, collection} = route.params as ListProps;

  const navigation = useNavigation<any>();

  navigation.setOptions({title});

  async function loadData() {
    try {
      setLoading(true);
      await getData({collection}).then(element => {
        setData(
          element.map(item => {
            if (collection === 'clients') {
              return {
                item,
                dataList: {
                  title: item.fantasyName,
                  info: [item.socialReason, item.cnpj],
                },
              };
            }
            return {
              item,
              dataList: {
                title: item.name,
                info: [item.description],
                version: item.version,
              },
            };
          }),
        );
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function handleNavigateToRegister() {
    let routeName = 'ClientRegister';
    if (collection === 'products') {
      routeName = 'ProductRegister';
    }
    navigation.navigate(routeName);
  }

  function handleNavigateToPage(item: IProduct | IUser | IClient) {
    let routeName = 'Client';
    if (collection === 'products') {
      routeName = 'Product';
    }
    navigation.navigate(routeName, {item});
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  return (
    <>
      <Container>
        <Products
          data={data}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ListCard
              key={item.id}
              title={item.dataList.title}
              info={item.dataList.info}
              onPress={() => handleNavigateToPage(item.item)}
              version={item.dataList.version}
            />
          )}
        />
        <RegisterButton onPress={() => handleNavigateToRegister()} />
      </Container>
      {loading && <Loading />}
    </>
  );
}
