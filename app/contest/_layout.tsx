import React from 'react';
import { Navigator } from 'expo-router';
import Slot = Navigator.Slot;
import Header from '@/components/Header';

const ContestScreenLayout = () => {
  return (
    <>
      <Header enableBack={true} />
      <Slot />
    </>
  );
};

export default ContestScreenLayout;
