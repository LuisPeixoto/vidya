import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 75px;
  height: 75px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  bottom: 40px;
  right: 20px;
  z-index: 1;
`;

export const Icon = styled(icon).attrs({
  size: 32,
})`
  color: ${({theme}) => theme.colors.white};
`;
