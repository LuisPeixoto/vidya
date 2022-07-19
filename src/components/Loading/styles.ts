import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  padding: 48px;
  border-radius: 8px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.primary,
})``;
