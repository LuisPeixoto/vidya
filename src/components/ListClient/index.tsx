import React from 'react';
import {ClientCard} from '../ClientCard';
import {List} from './styles';

interface Props {
  data: {
    title: string;
    urlImage: string;
  }[];
}
export function ListClient({data}: Props) {
  return (
    <List
      data={data}
      horizontal
      keyExtractor={item => item.title}
      renderItem={({item}) => (
        <ClientCard title={item.title} urlImage={item.urlImage} />
      )}
    />
  );
}
