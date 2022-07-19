import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Products = styled.SectionList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 16,
  },
})``;
