import { i18n } from '@/i18n';
import { StyleSheet, View } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import Entypo from '@expo/vector-icons/Entypo';

import { fonts, widthSizes } from '@/styles/Sizes';
import linkingUtils from '@/utils/linkingUtils';
import Header from '@/components/Header';

export default function SocialNetworkModal() {
  const linkYoutube = 'https://www.youtube.com/@GDGCochabamba';
  const linkFacebook = 'https://www.facebook.com/GDGCochabamba';
  const instagram = 'https://www.instagram.com/gdgcochabamba/';

  const openYoutube = () => {
    linkingUtils.openUrl(linkYoutube);
  };

  const openFacebook = () => {
    linkingUtils.openUrl(linkFacebook);
  };

  const openInstagram = () => {
    linkingUtils.openUrl(instagram);
  };

  return (
    <View style={styles.container}>
      <Header enableBack={true} hideProfile={true} customBackground={'transparent'} />
      <TextApp text={i18n.t('socialMedia')} style={styles.title} />
      <View style={styles.socialNetworkContainer}>
        <Entypo name="instagram" size={widthSizes[30]} color="black" onPress={openInstagram} />
        <Entypo name="facebook" size={widthSizes[30]} color="black" onPress={openFacebook} />
        <Entypo name="youtube" size={widthSizes[30]} color="black" onPress={openYoutube} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: widthSizes[10],
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts[20],
  },
  socialNetworkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: widthSizes[30],
  },
});
