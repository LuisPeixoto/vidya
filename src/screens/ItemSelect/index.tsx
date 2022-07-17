import React from 'react';
import {ClientRegisterProps} from '../ClientRegister';
import {ProductRegisterProps} from '../ProductRegister';

import {Container, Content, List, Item, Text} from './styles';

interface Props {
  item: (ClientRegisterProps | ProductRegisterProps)[];
  type: 'client' | 'product';
  setItem: () => void;
  closeSelectItem: () => void;
}

export function ItemSelect({item, type, setItem, closeSelectItem}: Props) {
  function handleItemSelect(item: ClientRegisterProps | ProductRegisterProps) {
    setItem(item);
    closeSelectItem();
  }
  return (
    <Container onPress={() => closeSelectItem()}>
      <Content>
        <List
          data={item}
          renderItem={({item}) => (
            <Item onPress={() => handleItemSelect(item)}>
              <Text> {type === 'client' ? item.nomeFantasia : item.name}</Text>
            </Item>
          )}
        />
      </Content>
    </Container>
  );
}
