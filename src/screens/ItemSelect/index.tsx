import React from 'react';
import {IClient, IProduct} from '../../interfaces';

import {Container, Content, List, Item, Text} from './styles';

interface Props {
  item: (IClient | IProduct)[];
  type: 'client' | 'product';
  setItem: ((client: IClient) => void) | ((product: IProduct) => void);
  closeSelectItem: () => void;
}

export function ItemSelect({item, type, setItem, closeSelectItem}: Props) {
  function handleItemSelect(item: IClient | IProduct) {
    setItem(item);
    closeSelectItem();
  }

  return (
    <Container onPress={() => closeSelectItem()}>
      <Content>
        <List
          data={item}
          renderItem={element => {
            return (
              <Item onPress={() => handleItemSelect(element.item)}>
                <Text>
                  {' '}
                  {type === 'client'
                    ? element.item.fantasyName
                    : element.item.name}
                </Text>
              </Item>
            );
          }}
        />
      </Content>
    </Container>
  );
}
