import React from 'react';
import {Header, ListProduct, ListClient, ListUser} from '../../components';
import {SectionTitle} from '../../components/SectionTitle';
import {Container, Content, Section} from './styles';

export function Home() {
  const DATA = [
    {
      title: 'Cliente',
      data: [
        {
          title: 'Quitandaria dadsadd das ds dadasdd',
          urlImage:
            'https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2021/05/18090940/teste-ab-header.jpg',
        },
        {
          title: 'Cliente 2',
          urlImage:
            'https://quatrorodas.abril.com.br/wp-content/uploads/2020/12/chevrolet-2021-onix-premier-8389-e1607978189472.jpg?quality=70&strip=info',
        },
        {
          title: 'Cliente 2',
          urlImage:
            'https://quatrorodas.abril.com.br/wp-content/uploads/2020/12/chevrolet-2021-onix-premier-8389-e1607978189472.jpg?quality=70&strip=info',
        },
      ],
    },

    {
      title: 'Desserts',
      data: [
        {title: 'Cliente 1', description: 'Cliente 1', version: '1.0.0'},
        {title: 'Cliente 1', description: 'Cliente 1', version: '1.0.0'},
      ],
    },
  ];
  return (
    <Container>
      <Content>
        <Header />
        <Section>
          <SectionTitle title="Clientes" optionLoadMore />
          <ListClient data={DATA[0].data} />
        </Section>

        <Section>
          <SectionTitle title="Produtos" optionLoadMore />
          <ListProduct data={DATA[1].data} />
        </Section>

        <Section>
          <SectionTitle title="Usuários" optionLoadMore />
          <ListUser data={DATA[1].data} />
        </Section>
      </Content>
    </Container>
  );
}
