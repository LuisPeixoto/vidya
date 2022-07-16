import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View``;
export const Images = styled.FlatList``;
export const Indexes = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  width: ${Dimensions.get('window').width}px;
  margin-bottom: 24px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 200px;
`;
