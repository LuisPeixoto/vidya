import React from 'react';
import {Alert} from 'react-native';
import {ImageProps} from '../../interfaces';
import {Container, Image, ImageButton} from './styles';

interface Props {
  images: ImageProps[];
  setImages: (images: ImageProps[]) => void;
}

export function PreviewImages({images, setImages}: Props) {
  function removeImage(index: number) {
    Alert.alert(
      'Remover imagem',
      'Deseja remover a imagem?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => {
            setImages(images.filter((_, i) => i !== index));
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <Container>
      {images.map((image, index) => (
        <ImageButton onPress={() => removeImage(index)} key={index}>
          <Image key={index} source={{uri: image.uri}} />
        </ImageButton>
      ))}
    </Container>
  );
}
