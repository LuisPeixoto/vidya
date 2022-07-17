import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ItemSelectButton({title, ...rest}: Props) {
  const navigation = useNavigation<any>();
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
