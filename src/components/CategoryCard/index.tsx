/* eslint-disable react/function-component-definition */
import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import IconType from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Title, Icon} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.ComponentProps<typeof IconType>['name'];
}

export function CategoryCard({title, icon, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
