import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 21px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.dark};
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;
export const TextButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.primary};
`;
