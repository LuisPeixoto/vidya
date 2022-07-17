import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 150,
  },
})`
  padding: 32px 16px;
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  position: absolute;
  padding: 24px 16px 32px 16px;
  background-color: ${({theme}) => theme.colors.grayLight};
  bottom: 0;
  z-index: 1;
`;

export const UploadImage = styled.View`
  padding: 32px 16px;
  background-color: ${({theme}) => theme.colors.grayLight};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.border};
  border-style: dashed;
`;
export const Icon = styled(icon).attrs({
  size: 86,
})`
  color: ${({theme}) => theme.colors.primaryLight};
`;
export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
  margin-top: 8px;
`;

export const FormatText = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const UploadButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
export const UploadButtonText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: white;
`;
