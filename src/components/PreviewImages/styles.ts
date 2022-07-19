import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  padding: 16,
})``;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const ImageButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;
