import React from 'react';
import LoginScreen from '@/app/login/LoginScreen';
import LoginScreenService from '@/app/login/LoginScreenService';

export default function LoginScreenController() {
  const { loginWithGoogle } = LoginScreenService.useLoginScreenService();

  return <LoginScreen loginWithGoogle={loginWithGoogle} />;
}
