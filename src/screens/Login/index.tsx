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
  SignupButton,
} from './styles';

export function Login() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin() {
    navigation.navigate('Home');
  }

  function handleSignup() {
    navigation.navigate('Signup');
  }

  return (
    <Container>
      <Content>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <Image source={logo} />
        <Title>Bem vindo ao app</Title>
        <Subtitle>Faça seu login para continuar</Subtitle>
        <Form>
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
          <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
        </Form>
        <Footer>
          <FooterText>Não tem conta? </FooterText>
          <SignupButton onPress={() => handleSignup()}>
            <FooterTextBold>Cadastre-se</FooterTextBold>
          </SignupButton>
        </Footer>
      </Content>
    </Container>
  );
}
