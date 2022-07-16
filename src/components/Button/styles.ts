import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 16px;
  padding: 20px 64px;
`;
