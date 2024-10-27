import fbAuth from '@/firebase/fbAuth';

const useLoginScreenService = () => {
  const loginWithGoogle = async () => {
    await fbAuth.loginWithGoogle()
  };

  return { loginWithGoogle };
};

const LoginScreenService = {
  useLoginScreenService,
};

export default LoginScreenService;
