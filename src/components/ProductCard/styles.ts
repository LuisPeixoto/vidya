import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.border};
  padding: 16px 12px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 8px;
`;
export const Description = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Version = styled.View`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.border};
`;

export const VersionText = styled.Text`
  font-size: 14px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.white};
`;
