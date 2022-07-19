import React from 'react';

import {Container, ActivityIndicator, Content} from './styles';

export function Loading() {
  return (
    <Container>
      <Content>
        <ActivityIndicator />
      </Content>
    </Container>
  );
}
