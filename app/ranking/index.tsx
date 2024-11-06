import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Separator from '@/components/Separator';
import UserRanking from '@/components/UserRanking';

import communityService from '@/services/communityService';

import { useThemeColor } from '@/hooks/useThemeColor';

import { widthSizes } from '@/styles/Sizes';
import { FbUser } from '@/models/FbUser';

export default function RankingScreen() {
  const cardBorder = useThemeColor({}, 'cardBorder');
  const { users } = communityService.useCommunityScreenService();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item, index }: { item: FbUser; index: number }) => <UserRanking user={item} index={index} />}
        ItemSeparatorComponent={() => <Separator />}
        style={[styles.listContainer, { borderColor: cardBorder }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: widthSizes[10],
  },
  listContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: widthSizes[10],
    padding: widthSizes[15],
  },
});
