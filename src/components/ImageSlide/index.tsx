import React, {useRef, useState} from 'react';
import {ViewToken} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Bullet} from '../Bullet';
import {Container, Indexes, Content, Image} from './styles';

interface Props {
  ImageUrls: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlide({ImageUrls}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const {viewableItems, changed} = info;
    if (changed.length) {
      setCurrentImage(changed[0].index!);
    }

    if (viewableItems.length) {
      setCurrentImage(viewableItems[0].index!);
    }
  });

  return (
    <Container>
      <FlatList
        data={ImageUrls}
        keyExtractor={item => item}
        renderItem={item => (
          <Content>
            <Image
              key={item.item}
              source={{
                uri: item.item,
              }}
            />
          </Content>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
      <Indexes>
        {ImageUrls.map((_, index) => {
          return <Bullet key={_} active={currentImage === index} />;
        })}
      </Indexes>
    </Container>
  );
}
