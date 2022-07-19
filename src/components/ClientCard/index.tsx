import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title, Image, Content} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  urlImage: string;
}

export function ClientCard({title, urlImage, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Image source={{uri: urlImage}} />
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
