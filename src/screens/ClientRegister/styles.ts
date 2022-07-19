import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 150,
  },
})``;

export const Section = styled.View`
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  position: absolute;
  padding: 24px 16px 32px 16px;
  background-color: ${({theme}) => theme.colors.backgroundCard};
  bottom: 0;
  z-index: 1;
`;

export const Logo = styled.View`
  height: 120px;
  align-items: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  margin-bottom: 120px;
`;
export const Image = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: 10px;
`;
export const ButtonGallery = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  top: 120px;
  right: 100px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(icon).attrs({
  size: 32,
})`
  color: ${({theme}) => theme.colors.white};
`;
