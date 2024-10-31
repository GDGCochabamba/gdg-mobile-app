import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import fbAuth from '@/firebase/fbAuth';

import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';

const useUserSession = () => {
  const { replaceTo } = useAppNavigation();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (!user) {
      setUser(null);
    } else {
      setUser(user);
    }
  };

  const logout = async () => {
    try {
      await fbAuth.signOut();
      replaceTo(Routes.Root.login);
    } catch (e) {
      console.log('Error on logout', e);
    }
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscribe();
  }, []);

  return { user, getCurrentUser: fbAuth.getCurrentUser, logout };
};

export default useUserSession;
