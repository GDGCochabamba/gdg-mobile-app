import React from 'react';
import { View, Text } from 'react-native';
import communityScreenService from '@/services/communityScreenService';

export default function CommunityScreen() {
  const {} = communityScreenService.useCommunityScreenService();

  return (
    <View>
      <Text>CommunityScreen</Text>
    </View>
  );
}
