import {Alert} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export async function UploadImageFromGallery({
  limit,
}: {
  limit: number;
}): Promise<any> {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: limit,
  };
  try {
    const result = await launchImageLibrary(options);

    if (result.didCancel) {
      return [];
    }
    return (
      result.assets?.map(asset => {
        return {
          uri: asset.uri,
          type: asset.type,
          name: asset.fileName,
        };
      }) || []
    );
  } catch (error) {
    Alert.alert('Erro', 'Erro ao carregar imagem');
  }
}
