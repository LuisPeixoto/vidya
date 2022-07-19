import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  error?: boolean;
}

export function ItemSelectButton({title, error, ...rest}: Props) {
  return (
    <Container {...rest} isErrored={error}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
