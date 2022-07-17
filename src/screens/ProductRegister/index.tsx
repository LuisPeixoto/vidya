import React from 'react';
import {Button, Input, SectionTitle} from '../../components';
import {
  Container,
  Form,
  Section,
  ContainerButton,
  UploadImage,
  Icon,
  Text,
  UploadButton,
  UploadButtonText,
  FormatText,
} from './styles';

export function ProductRegister() {
  return (
    <Container>
      <Form>
        <Section>
          <Input placeholder="Nome" />
          <Input placeholder="Descrição" />
          <Input placeholder="Versão" />
        </Section>

        <Section>
          <SectionTitle title="Adicionar Imagens" />
          <UploadImage>
            <Icon name="image" />
            <Text>Faça upload das imagens do produto</Text>
            <FormatText>JPG e PNG, somente</FormatText>
            <UploadButton>
              <UploadButtonText>Adicionar</UploadButtonText>
            </UploadButton>
          </UploadImage>
        </Section>
      </Form>
      <ContainerButton>
        <Button title="Salvar" />
      </ContainerButton>
    </Container>
  );
}
