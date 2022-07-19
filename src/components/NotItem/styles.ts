import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const IconContainer = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(icon).attrs({
  size: 120,
})`
  color: ${({theme}) => theme.colors.white};
`;

export const Text = styled.Text`
  text-align: center;
  padding: 24px;
  color: ${({theme}) => theme.colors.primary};
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.bold};
`;
