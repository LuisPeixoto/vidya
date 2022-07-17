import styled from 'styled-components/native';

interface Props {
  active?: boolean;
}

export const Container = styled.View<Props>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({active, theme}) =>
    !active ? theme.colors.primary : theme.colors.gray};
  margin-right: 5px;
`;
