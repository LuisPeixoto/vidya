import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import {Home, Login, Product, Signup} from '../screens';
import {ListProducts} from '../screens/ListProducts';
import {ListClients} from '../screens/ListClients';

export function AppRoutes() {
  const {Navigator, Screen} = createStackNavigator();
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
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
      <Screen
        name="Products"
        options={{
          title: 'Produtos',
        }}
        component={ListProducts}
      />
      <Screen
        name="Clients"
        options={{
          title: 'Clientes',
        }}
        component={ListClients}
      />

      <Screen name="Product" component={Product} />
    </Navigator>
  );
}
