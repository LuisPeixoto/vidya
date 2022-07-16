import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.9,
})`
  width: 91px;
  height: 82px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
  margin-top: 8px;
`;

export const Icon = styled(icon).attrs({
  size: 32,
})`
  color: ${({theme}) => theme.colors.white};
`;
