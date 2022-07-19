import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundCard};
  border-radius: 10px;
  padding: 16px 12px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 8px;
`;
export const Info = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Version = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 12px;
`;

export const VersionContainer = styled.View`
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const VersionText = styled.Text`
  border-radius: 12px;

  font-size: 14px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.white};
`;
