import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ClientCard} from '../ClientCard';
import {SectionTitle, ListCard} from '..';
import {List, Section, Padding} from './styles';

interface Props {
  title: string;
  data: {
    title: string;
    urlImage: string;
  }[];
}
export function CategoryList({title, data}: Props) {
  const navigation = useNavigation();

  function handleNavigateToList({collection}: {collection: string}) {
    navigation.navigate('List', {title, collection});
  }

  function handleNavigatePage(routeName: string, item: any) {
    navigation.navigate(routeName, {item});
  }

  return (
    <>
      <Section>
        <SectionTitle
          title={title}
          optionLoadMore
          onPress={() => {
            handleNavigateToList({
              collection: title === 'Clientes' ? 'clients' : 'products',
            });
          }}
        />
      </Section>
      <List
        data={data}
        horizontal={title !== 'Produtos'}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return title === 'Clientes' ? (
            <ClientCard
              key={item.id}
              title={item.fantasyName}
              urlImage={item.image}
              onPress={() => handleNavigatePage('Client', item)}
            />
          ) : (
            <Padding>
              <ListCard
                key={item.id}
                title={item.name}
                info={[item.description]}
                version={item.version}
                onPress={() => handleNavigatePage('Product', item)}
              />
            </Padding>
          );
        }}
      />
    </>
  );
}
