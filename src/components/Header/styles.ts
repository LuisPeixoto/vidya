import {Platform} from 'react-native';
import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() + 16 : 16}px 16px 32px
    16px;
`;

export const User = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const UserText = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
`;
export const Actions = styled.View.attrs()`
  flex-direction: row;
`;
export const ActionButton = styled.TouchableOpacity``;
export const Icon = styled(icon).attrs({
  size: 24,
})`
  color: ${({theme}) => theme.colors.white};
  margin-left: 24px;
`;
export const Categories = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
