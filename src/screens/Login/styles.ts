import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 16px;
`;
export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 32px;
`;

export const Image = styled.Image`
  margin-bottom: 24px;
`;

export const Form = styled.View`
  width: 100%;
`;
export const Footer = styled.View`
  margin-top: 32px;
  flex-direction: row;
`;
export const FooterText = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;
export const FooterTextBold = styled(FooterText)`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
`;

export const SignupButton = styled.TouchableOpacity``;
