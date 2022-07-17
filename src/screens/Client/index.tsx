import React from 'react';
import {SectionTitle} from '../../components';
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
  return (
    <Container>
      <ClientImage>
        <Image source={{uri: 'https://i.imgur.com/XyqQZQz.png'}} />
      </ClientImage>
      <Content>
        <Section>
          <Text>
            <TextBold>CNPJ:</TextBold> 00.000.000/0000-00
          </Text>
          <Text>
            <TextBold>Razão Social:</TextBold> Quitandaria
          </Text>
          <Text>
            <TextBold>Nome Fantasia:</TextBold> Quitandaria
          </Text>
        </Section>
        <Section>
          <SectionTitle title="Localização" />
          <Text>
            <TextBold>Estado:</TextBold> Rio de Janeiro
          </Text>
          <Text>
            <TextBold>Cidade:</TextBold> Campos dos Goytacazes
          </Text>
          <Text>
            <TextBold>Bairro:</TextBold> Bairro d
          </Text>
          <Text>
            <TextBold>CEP:</TextBold> 28000-000
          </Text>
          <Text>
            <TextBold>Logradouro:</TextBold> Rua X
          </Text>
          <Text>
            <TextBold>Número:</TextBold> 120
          </Text>
        </Section>

        <Section>
          <SectionTitle title="Contato" />
          <Text>
            <TextBold>Email:</TextBold> email@email.com
          </Text>
          <Text>
            <TextBold>Telefone:</TextBold> (00) 0000-0000
          </Text>
        </Section>
      </Content>
    </Container>
  );
}
