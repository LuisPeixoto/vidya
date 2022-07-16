import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title, Image} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  urlImage: string;
}

export function ClientCard({title, urlImage, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Image source={{uri: urlImage}} />
      <Title>{title}</Title>
    </Container>
  );
}
