import React from 'react';
import logo from '../../../assets/images/logo.png';
import {Button, Input, InputPassword} from '../../components';

import {
  Container,
  Image,
  Title,
  Subtitle,
  Form,
  Footer,
  FooterText,
  FooterTextBold,
  SignupButton,
} from './styles';

export function Login() {
  return (
    <Container>
      <Image source={logo} />
      <Title>Bem vindo ao app</Title>
      <Subtitle>Faça seu login para continuar</Subtitle>
      <Form>
        <Input icon="email" placeholder="E-mail" />
        <InputPassword placeholder="Senha" />
        <Button title="Entrar" onPress={() => {}} />
      </Form>
      <Footer>
        <FooterText>Não tem conta? </FooterText>
        <SignupButton>
          <FooterTextBold>Cadastre-se</FooterTextBold>
        </SignupButton>
      </Footer>
    </Container>
  );
}
