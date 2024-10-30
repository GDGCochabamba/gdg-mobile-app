import fbAuth from '@/firebase/fbAuth';

import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';

const useLoginScreenService = () => {
  const { navigateTo } = useAppNavigation();

  const loginWithGoogle = async () => {
    try {
      await fbAuth.loginWithGoogle();
      navigateTo(Routes.Root.topTabs);
    } catch (error) {
      console.log('loginWithGoogle error:', error);
    }
  };

  return { loginWithGoogle };
};

const LoginScreenService = {
  useLoginScreenService,
};

export default LoginScreenService;
