import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
`;

export const Content = styled.View`
  width: 80%;
  padding: 4px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
`;

export const List = styled.FlatList.attrs({})``;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 24px;
  background-color: ${({theme}) => theme.colors.white};
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.dark};
`;
