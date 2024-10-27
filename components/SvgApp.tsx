import React from 'react';
import { SvgUri } from 'react-native-svg';
import { UriProps } from 'react-native-svg/src/xml';

interface SvgAppProps extends UriProps {}

const SvgApp = ({ ...props }: SvgAppProps) => {
  return <SvgUri {...props} />;
};

export default SvgApp;
