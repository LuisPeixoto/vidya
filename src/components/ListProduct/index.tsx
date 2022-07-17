import React from 'react';
import {ProductCard} from '../ProductCard';
import {List} from './styles';

interface Props {
  data: {
    title: string;
    description: string;
    version: string;
  }[];
}
export function ListProduct({data}: Props) {
  return (
    <List
      data={data}
      keyExtractor={item => item.title}
      renderItem={({item}) => (
        <ProductCard
          title={item.title}
          description={item.description}
          version={item.version}
        />
      )}
    />
  );
}
