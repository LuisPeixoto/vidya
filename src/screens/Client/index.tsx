import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SectionTitle} from '../../components';
import {IClient} from '../../interfaces';
import {cepMask, cnpjMask} from '../../utils/mask';
import {
  Container,
  Content,
  Image,
  Section,
  Text,
  TextBold,
  ClientImage,
} from './styles';

export function Client() {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params as {item: IClient};

  navigation.setOptions({title: item.fantasyName});
  return (
    <Container>
      <ClientImage>
        <Image source={{uri: item.image}} />
      </ClientImage>
      <Content>
        <Section>
          <Text>
            <TextBold>CNPJ:</TextBold> {cnpjMask(item.cnpj)}
          </Text>
          <Text>
            <TextBold>Razão Social:</TextBold> {item.socialReason}
          </Text>
          <Text>
            <TextBold>Nome Fantasia:</TextBold> {item.fantasyName}
          </Text>
        </Section>
        <Section>
          <SectionTitle title="Localização" />
          <Text>
            <TextBold>Estado:</TextBold> {item.state}
          </Text>
          <Text>
            <TextBold>Cidade:</TextBold> {item.city}
          </Text>
          <Text>
            <TextBold>Bairro:</TextBold> {item.district}
          </Text>
          <Text>
            <TextBold>CEP:</TextBold> {cepMask(item.cep)}
          </Text>
          <Text>
            <TextBold>Logradouro:</TextBold> {item.address}
          </Text>
          <Text>
            <TextBold>Número:</TextBold> {item.number}
          </Text>
        </Section>

        <Section>
          <SectionTitle title="Contato" />
          <Text>
            <TextBold>Email:</TextBold> {item.email}
          </Text>
          <Text>
            <TextBold>Telefone:</TextBold> {item.number}
          </Text>
        </Section>
      </Content>
    </Container>
  );
}
