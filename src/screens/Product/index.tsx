import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ImageSlide, SectionTitle} from '../../components';
import {IProduct} from '../../interfaces';
import {
  Container,
  Content,
  Description,
  Version,
  VersionNumber,
} from './styles';

export function Product() {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params as {item: IProduct};
  navigation.setOptions({title: item.name});

  return (
    <Container>
      <ImageSlide ImageUrls={item.images as string[]} />
      <Content>
        <SectionTitle title={item.name} />
        <Description>{item.description}</Description>
        <Version>
          Versão: <VersionNumber>{item.version}</VersionNumber>
        </Version>
      </Content>
    </Container>
  );
}
