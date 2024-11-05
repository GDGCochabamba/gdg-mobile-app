import { Linking } from 'react-native';

const openUrl = (url: string) => {
  Linking.openURL(url).then();
};

const linkingUtils = {
  openUrl,
};

export default linkingUtils;
