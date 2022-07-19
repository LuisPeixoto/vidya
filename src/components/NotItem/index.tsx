import React from 'react';
import {Container, IconContainer, Icon, Text} from './styles';

export function NoItem() {
  return (
    <Container>
      <IconContainer>
        <Icon name="alert-circle-outline" />
      </IconContainer>
      <Text> Nenhum item encontrado </Text>
    </Container>
  );
}
