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
        <CategoryCard title="Clientes" icon="briefcase-variant" />
        <CategoryCard title="Clientes" icon="tag-multiple" />
        <CategoryCard title="Clientes" icon="account-group" />
      </Categories>
    </Container>
  );
}
