import {Image as img} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-right: 16px;
`;

export const Content = styled.View.attrs({})`
  width: 150px;
  height: 180px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.backgroundCard};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  margin-top: 12px;
`;

export const ContainerImage = styled.View.attrs({})`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
`;

export const Image = styled(img).attrs({
  resizeMode: 'cover',
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
