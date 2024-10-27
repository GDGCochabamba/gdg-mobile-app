import React from 'react';
import { Image, type ImageProps } from 'react-native';

interface ImageAppProps extends ImageProps {}

const ImageApp = ({ ...props }: ImageAppProps) => {
  return <Image {...props} />;
};

export default ImageApp;
