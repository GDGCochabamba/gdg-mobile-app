import { useState } from 'react';
import fbAuth from '@/firebase/fbAuth';

import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';
import fbUsers from '@/firebase/firestore/fbUsers';

import { FbUserCredential } from '@/models/FbUserCredential';

const useLoginScreenService = () => {
  const { replaceTo } = useAppNavigation();
  const [loading, setLoading] = useState(false);

  const createDataForNewUser = async (fbUserCredential: FbUserCredential) => {
    await fbUsers.createUserByFbUserCredential(fbUserCredential);
    replaceTo(Routes.Root.topTabs);
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result: FbUserCredential = await fbAuth.loginWithGoogle();
      if (result && result.user && result.user.email) {
        const user = await fbUsers.getUserByEmail(result.user.email);
        if (user) {
          replaceTo(Routes.Root.topTabs);
        } else {
          await createDataForNewUser(result);
        }
      }
    } catch (error) {
      console.log('loginWithGoogle error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loginWithGoogle, loading };
};

const LoginScreenService = {
  useLoginScreenService,
};

export default LoginScreenService;
