import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CategoryCard as Card} from '../../components';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Categories = styled.View`
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
`;

export const CategoryCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 82px;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
  margin-left: 16px;
`;

export const Icon = styled(icon).attrs({
  size: 38,
})`
  color: ${({theme}) => theme.colors.white};
`;
