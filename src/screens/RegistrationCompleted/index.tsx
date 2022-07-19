import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  IconContainer,
  Icon,
  Button,
  Text,
  ButtonText,
} from './styles';

export function RegistrationCompleted() {
  const navigation = useNavigation();
  function handleNavigateToHome() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <IconContainer>
        <Icon name="check" />
      </IconContainer>

      <Text> Cadastro realizado com sucesso! </Text>
      <Button onPress={() => handleNavigateToHome()}>
        <ButtonText>Voltar para o app</ButtonText>
      </Button>
    </Container>
  );
}
