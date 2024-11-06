import { i18n } from '@/i18n';
import { StyleSheet, View } from 'react-native';

import TextApp from '@/components/texts/TextApp';

import { fonts, widthSizes } from '@/styles/Sizes';
import Header from '@/components/Header';

export default function AppContentModal() {

  return (
    <View style={styles.container}>
      <Header enableBack={true} hideProfile={true} customBackground={'transparent'} />
      <TextApp text={i18n.t('comingSoon')} style={styles.title} />
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
});
