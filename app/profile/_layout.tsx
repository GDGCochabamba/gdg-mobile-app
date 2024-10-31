import React from 'react';
import { Navigator } from 'expo-router';
import Header from '@/components/Header';

import Slot = Navigator.Slot;

export default function ProfileScreenLayout() {
  return (
    <>
      <Header enableBack={true} hideProfile={true} />
      <Slot />
    </>
  );
}
