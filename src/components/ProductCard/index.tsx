import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title, Description, Version, VersionText} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  description: string;
  version: string;
}

export function ProductCard({title, description, version, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Version>
        <VersionText>Versão: {version}</VersionText>
      </Version>
    </Container>
  );
}
