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
  LoginButton,
} from './styles';

export function Signup() {
  return (
    <Container>
      <Image source={logo} />
      <Title>Cadastra-se</Title>
      <Subtitle>Preencha os dados abaixo</Subtitle>
      <Form>
        <Input icon="person" placeholder="Nome" />
        <Input icon="email" placeholder="E-mail" />
        <InputPassword placeholder="Senha" />
        <InputPassword placeholder="Repita a senha" />
        <Button title="Cadastrar" onPress={() => {}} />
      </Form>
      <Footer>
        <FooterText>Já possui uma conta? </FooterText>
        <LoginButton>
          <FooterTextBold>Entrar</FooterTextBold>
        </LoginButton>
      </Footer>
    </Container>
  );
}
