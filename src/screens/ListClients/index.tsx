import React from 'react';
import {ClientCard, RegisterButton} from '../../components';
import {Container, Clients} from './styles';

export function ListClients() {
  return (
    <Container>
      <Clients
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ClientCard
            title="TESTE"
            urlImage="https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2021/05/18090940/teste-ab-header.jpg"
          />
        )}
      />

      <RegisterButton />
    </Container>
  );
}
