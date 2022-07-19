import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 16px;
`;
export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;
export const Version = styled(Description)``;
export const VersionNumber = styled(Description)`
  font-family: ${({theme}) => theme.fonts.bold};
`;
