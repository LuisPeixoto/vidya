import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ListCard, RegisterButton, SectionTitle} from '../../../components';
import {NoItem} from '../../../components/NotItem';
import {Container, Products} from './styles';

export function ListUserByProduct() {
  const route = useRoute();
  const {client, usersProduct} = route.params;

  const navigation = useNavigation<any>();
  navigation.setOptions({
    headerTitle: 'Usuários por Produto',
  });

  function handleNavigateRegister() {
    navigation.navigate('UserRegister', {client});
  }

  return (
    <Container>
      <Products
        sections={usersProduct}
        stickySectionHeadersEnabled={false}
        keyExtractor={item => item.name}
        ListEmptyComponent={() => <NoItem />}
        renderItem={({item}) => <ListCard key={item.id} title={item.name} />}
        hea
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle title={title} />
        )}
      />
      <RegisterButton onPress={() => handleNavigateRegister()} />
    </Container>
  );
}
