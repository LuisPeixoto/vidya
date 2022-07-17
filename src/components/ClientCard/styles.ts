import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 150px;
  height: 180px;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.border};
  padding: 12px 4px;
  margin-right: 16px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100px;
  margin-bottom: 8px;
`;
