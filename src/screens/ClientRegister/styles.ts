import styled from 'styled-components/native';

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
