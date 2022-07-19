import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Title, Container, TextButton, Text} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  optionLoadMore?: boolean;
}

export function SectionTitle({title, optionLoadMore = false, ...rest}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {optionLoadMore && (
        <TextButton {...rest}>
          <Text>Ver todos</Text>
        </TextButton>
      )}
    </Container>
  );
}
