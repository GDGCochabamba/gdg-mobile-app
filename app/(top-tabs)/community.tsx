import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet, FlatList } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import ShareSvr from '@/components/svg/ShareSvr';
import CardSection from '@/components/CardSection';
import UserRanking from '@/components/UserRanking';
import MainButton from '@/components/buttons/MainButton';
import IntegrationInstructionsSvr from '@/components/svg/IntegrationInstructionsSvr';

import communityService from '@/services/communityService';

import { useThemeColor } from '@/hooks/useThemeColor';
import useAppNavigation from '@/hooks/useAppNavigation';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import { Routes } from '@/constants/Routes';
import { FbUser } from '@/models/FbUser';

export default function CommunityScreen() {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const dateColor = useThemeColor({}, 'date');
  const cardBorder = useThemeColor({}, 'cardBorder');
  const { navigateTo } = useAppNavigation();
  const { users } = communityService.useCommunityScreenService();

  const renderRanking = () => {
    const seeAll = () => {
      navigateTo(Routes.Root.ranking);
    };

    const renderRankingList = () => {
      return (
        <View style={styles.rankingListContainer}>
          <FlatList data={users} renderItem={({ item }: { item: FbUser }) => <UserRanking user={item} />} />
        </View>
      );
    };

    return (
      <View style={[styles.rankingContainer, { borderColor: cardBorder, borderWidth: 1 }]}>
        <TextApp text={i18n.t('activityRanking')} style={styles.title} />
        <View style={styles.totalPointsContainer}>
          <TextApp text={i18n.t('totalPoints')} style={[styles.totalPoints, { color: dateColor }]} />
        </View>
        {renderRankingList()}
        <MainButton
          text={i18n.t('seeAll')}
          onPress={seeAll}
          style={[styles.seeAllButton, { backgroundColor: gdgColors.blue }]}
        />
      </View>
    );
  };

  const renderCards = () => {
    return (
      <View style={styles.cardContainer}>
        <CardSection title={i18n.t('socialMedia')} icon={<ShareSvr />} />
        <CardSection title={i18n.t('content')} icon={<IntegrationInstructionsSvr />} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderRanking()}
      {renderCards()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: widthSizes[20],
  },
  rankingContainer: {
    width: '100%',
    height: heightSizes[320],
    borderRadius: 10,
    marginTop: heightSizes[15],
    paddingLeft: widthSizes[20],
    paddingRight: widthSizes[20],
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightSizes[15],
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: heightSizes[20],
  },
  totalPoints: {
    fontSize: fonts[16],
    marginTop: heightSizes[10],
  },
  totalPointsContainer: {
    width: 'auto',
    alignItems: 'flex-end',
  },
  seeAllButton: {
    borderRadius: 25,
    marginBottom: heightSizes[15],
  },
  rankingListContainer: {
    flex: 1,
  },
});
