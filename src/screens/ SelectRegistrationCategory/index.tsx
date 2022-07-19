import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Container, Categories, CategoryCard, Title, Icon} from './styles';

export function SelectRegistrationCategory() {
  const navigation = useNavigation();

  function handleRegister(routeName: string) {
    navigation.navigate(routeName);
  }

  return (
    <Container>
      <Categories>
        <CategoryCard onPress={() => handleRegister('ClientRegister')}>
          <Icon name="briefcase-variant" />
          <Title>Clientes</Title>
        </CategoryCard>

        <CategoryCard onPress={() => handleRegister('ProductRegister')}>
          <Icon name="tag-multiple" />
          <Title>Produtos</Title>
        </CategoryCard>

        <CategoryCard onPress={() => handleRegister('UserRegister')}>
          <Icon name="account-group" />
          <Title>Usuários</Title>
        </CategoryCard>
      </Categories>
    </Container>
  );
}
