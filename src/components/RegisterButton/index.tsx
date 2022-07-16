import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Icon} from './styles';

export function RegisterButton({...rest}: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Icon name="plus" />
    </Container>
  );
}
