import React from 'react';
import {Button, Input, SectionTitle} from '../../components';
import {Container, Form, Section, ContainerButton} from './styles';

export function ClientRegister() {
  return (
    <Container>
      <Form>
        <Section>
          <Input placeholder="CNPJ" />
          <Input placeholder="Razão Social" />
          <Input placeholder="Nome Fantasia" />
        </Section>

        <Section>
          <SectionTitle title="Localização" />
          <Input placeholder="CEP" />
          <Input placeholder="Estado" />
          <Input placeholder="Cidade" />
          <Input placeholder="Bairro" />
          <Input placeholder="Logradouro" />
          <Input placeholder="Número" />
        </Section>

        <Section>
          <SectionTitle title="Contato" />
          <Input placeholder="Email" />
          <Input placeholder="Telefone" />
        </Section>
      </Form>
      <ContainerButton>
        <Button title="Salvar" />
      </ContainerButton>
    </Container>
  );
}
