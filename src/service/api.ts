import axios from 'axios';
import {ImageProps} from '../interfaces';

export async function cnpjApi(cnpj: string) {
  try {
    return await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function cepApi(cnpj: string) {
  try {
    return await axios.get(`https://viacep.com.br/ws/${cnpj}/json/`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function uploadImagesCloudinary(
  images: ImageProps[],
): Promise<any> {
  try {
    const data = new FormData();

    const uploads = images.map(image => {
      data.append('file', image);
      data.append('upload_preset', 'jr8zhipm');
      data.append('cloud_name', 'luispeixoto');

      return axios.post(
        'https://api.cloudinary.com/v1_1/luispeixoto/image/upload',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    });

    const response = await axios.all(uploads);
    return response.map(res => res.data.url.replace('http', 'https'));
  } catch (error) {
    console.log(error);
    return null;
  }
}
