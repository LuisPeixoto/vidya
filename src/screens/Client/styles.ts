import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const ClientImage = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const Image = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: 80px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;
export const TextBold = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
`;
