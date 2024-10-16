import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, googleProvider } from '@/firebaseConfig';

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log('token', token);

    const user = result.user;
    console.log('user', user);
  } catch (e: any) {
    const errorCode = e.code;
    const errorMessage = e.message;

    const email = e.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(e);
  }
};
