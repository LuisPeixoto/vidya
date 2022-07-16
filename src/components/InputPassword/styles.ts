import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from 'react-native';

import {TextInput as textInput} from 'react-native';
import theme from '../../styles/theme';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  margin: 8px 0;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${({theme, isFocused}) =>
    isFocused ? theme.colors.primary : theme.colors.border};
`;

export const Icon = styled(icon).attrs({
  size: 20,
})`
  margin-right: 10px;
  color: ${({theme, isFocused}) =>
    isFocused ? theme.colors.primary : theme.colors.border};
`;
export const TextInput = styled(textInput).attrs({
  placeholderTextColor: theme.colors.border,
  paddingVertical: 0,
})<Props>`
  font-size: 16px;
  flex: 1;
  padding-right: 16px;
  margin-bottom: ${Platform.OS === 'ios' ? '0px' : `-5px`};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, isFocused}) =>
    isFocused ? theme.colors.primary : theme.colors.dark};
`;

export const ButtonVisibility = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;
