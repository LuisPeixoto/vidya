import React from 'react';
import {ProductCard, RegisterButton} from '../../components';
import {Container, Products} from './styles';

export function ListProducts() {
  return (
    <Container>
      <Products
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ProductCard title="TESTE" description="TESTE" version="TESTE" />
        )}
      />
      <RegisterButton />
    </Container>
  );
}
