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
        </Actions>
      </User>

      <Categories>
        <CategoryCard
          title="Clientes"
          icon="briefcase-variant"
          onPress={() => navigation.navigate('Clients')}
        />
        <CategoryCard
          title="Produtos"
          icon="tag-multiple"
          onPress={() => navigation.navigate('Products')}
        />
        <CategoryCard title="Usuários" icon="account-group" />
      </Categories>
    </Container>
  );
}
