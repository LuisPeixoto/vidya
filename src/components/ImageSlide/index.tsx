import React, {useRef, useState} from 'react';
import {ViewToken} from 'react-native';
import {Bullet} from '../Bullet';
import {Container, Indexes, Content, Images, Image} from './styles';

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
    setCurrentImage(info.changed[0].index!);
  });

  return (
    <Container>
      <Images
        data={ImageUrls}
        keyExtractor={item => item}
        renderItem={item => (
          <Content>
            <Image
              key={item.index}
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
        {ImageUrls.map((_, index) => (
          <Bullet key={index} active={currentImage === index} />
        ))}
      </Indexes>
    </Container>
  );
}
