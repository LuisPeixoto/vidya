import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {CategoryCard} from '../CategoryCard';
import {
  Container,
  User,
  UserText,
  Actions,
  ActionButton,
  Icon,
  Categories,
} from './styles';

export function Header() {
  const navigation = useNavigation<any>();

  function handleNavigateToList({
    title,
    collection,
  }: {
    title: string;
    collection: string;
  }) {
    navigation.navigate('List', {title, collection});
  }

  function handleNavigateToListUser() {
    navigation.navigate('ListUser');
  }

  function handleNavigateToLogout() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <User>
        <UserText>Olá, Luis</UserText>

        <Actions>
          <ActionButton>
            <Icon name="search" />
          </ActionButton>

          <ActionButton>
            <Icon name="user" />
          </ActionButton>

          <ActionButton onPress={() => handleNavigateToLogout()}>
            <Icon name="log-out" />
          </ActionButton>
        </Actions>
      </User>

      <Categories>
        <CategoryCard
          title="Clientes"
          icon="briefcase-variant"
          onPress={() =>
            handleNavigateToList({title: 'Clientes', collection: 'clients'})
          }
        />
        <CategoryCard
          title="Produtos"
          icon="tag-multiple"
          onPress={() =>
            handleNavigateToList({title: 'Produtos', collection: 'products'})
          }
        />
        <CategoryCard
          title="Usuários"
          icon="account-group"
          onPress={() => handleNavigateToListUser()}
        />
      </Categories>
    </Container>
  );
}
