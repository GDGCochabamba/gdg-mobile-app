import React from 'react';
import LoginScreen from '@/app/login/LoginScreen';
import LoginScreenService from '@/app/login/LoginScreenService';

const LoginScreenController = () => {
  const { loginWithGoogle } = LoginScreenService.useLoginScreenService();

  return <LoginScreen />;
};

export default LoginScreenController;
