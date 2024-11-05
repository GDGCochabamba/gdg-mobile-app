import React from 'react';
import LoginScreen from '@/app/login/LoginScreen';
import LoginScreenService from '@/services/loginScreenService';

export default function LoginScreenController() {
  const { loginWithGoogle, loading } = LoginScreenService.useLoginScreenService();

  return <LoginScreen loginWithGoogle={loginWithGoogle} loading={loading} />;
}
