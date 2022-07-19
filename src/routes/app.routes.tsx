import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import {
  Client,
  ClientRegister,
  Home,
  List,
  ListUser,
  ListUserByProduct,
  Login,
  Product,
  ProductRegister,
  RegistrationCompleted,
  SelectRegistrationCategory,
  Signup,
  UserRegister,
} from '../screens';

export function AppRoutes() {
  const {Navigator, Screen} = createStackNavigator();
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: theme.colors.white},
        headerBackTitleVisible: false,
        cardShadowEnabled: false,
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.bold,
          color: theme.colors.white,
        },
        headerStyle: {
          backgroundColor: theme.colors.primary,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />

      <Screen name="Product" component={Product} />
      <Screen name="Client" component={Client} />
      <Screen
        name="ClientRegister"
        options={{
          title: 'Cadastro de Cliente',
        }}
        component={ClientRegister}
      />
      <Screen
        name="ProductRegister"
        options={{
          title: 'Cadastro de Produto',
        }}
        component={ProductRegister}
      />
      <Screen
        name="UserRegister"
        component={UserRegister}
        options={{
          title: 'Cadastro de Usuário',
        }}
      />

      <Screen
        name="ListUser"
        component={ListUser}
        options={{
          title: 'Selecione um cliente',
        }}
      />

      <Screen
        name="ListUserByProduct"
        component={ListUserByProduct}
        options={{
          title: 'Usuários',
        }}
      />

      <Screen
        name="RegistrationCompleted"
        component={RegistrationCompleted}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="SelectRegistrationCategory"
        component={SelectRegistrationCategory}
        options={{
          title: 'Selecione a categoria de cadastro',
        }}
      />

      <Screen name="List" component={List} />
    </Navigator>
  );
}
