import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`
  flex: 1;
`;

export const Section = styled.View`
  margin-top: 8px;
  padding: 16px;
`;

export const Padding = styled.View`
  padding: 0 16px;
`;
