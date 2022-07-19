import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {AppRoutes} from './app.routes';
import theme from '../styles/theme';

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <AppRoutes />
    </NavigationContainer>
  );
}
