import React from 'react';
import { Navigator } from 'expo-router';
import Slot = Navigator.Slot;
import Header from '@/components/Header';

export default function EventMapScreenLayout() {
  return (
    <>
      <Header enableBack={true} />
      <Slot />
    </>
  );
}
