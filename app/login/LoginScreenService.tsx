import fbAuth from '@/firebase/fbAuth';

import useAppNavigation from '@/hooks/useAppNavigation';
import { Routes } from '@/constants/Routes';

const useLoginScreenService = () => {
  const { navigateTo } = useAppNavigation();

  const loginWithGoogle = async () => {
    // await fbAuth.loginWithGoogle()
    navigateTo(Routes.Root.topTabs);
  };

  return { loginWithGoogle };
};

const LoginScreenService = {
  useLoginScreenService,
};

export default LoginScreenService;
