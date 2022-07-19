import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import logo from '../../../assets/images/logo.png';
import {Button, Input, InputPassword} from '../../components';
import {schema} from './schema';

import {
  Container,
  Content,
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
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignup() {
    navigation.navigate('RegistrationCompleted');
  }

  function handleLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <Image source={logo} />
        <Title>Cadastra-se</Title>
        <Subtitle>Preencha os dados abaixo</Subtitle>
        <Form>
          <Input
            control={control}
            name="name"
            icon="person"
            placeholder="Nome"
            error={errors.name && errors.name.message}
          />
          <Input
            control={control}
            name="email"
            icon="email"
            placeholder="E-mail"
            error={errors.email && errors.email.message}
          />
          <InputPassword
            control={control}
            name="password"
            placeholder="Senha"
            error={errors.password && errors.password.message}
          />
          <InputPassword
            control={control}
            name="confirmPassword"
            placeholder="Repita a senha"
            error={errors.confirmPassword && errors.confirmPassword.message}
          />
          <Button title="Cadastrar" onPress={handleSubmit(handleSignup)} />
        </Form>
        <Footer>
          <FooterText>Já possui uma conta? </FooterText>
          <LoginButton onPress={() => handleLogin()}>
            <FooterTextBold>Entrar</FooterTextBold>
          </LoginButton>
        </Footer>
      </Content>
    </Container>
  );
}
