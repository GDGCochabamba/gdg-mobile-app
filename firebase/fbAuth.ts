import { GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '@/firebaseConfig';
import { signInWithPopup } from '@firebase/auth/internal';

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('result', result);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    console.log('token', token);

    const user = result.user;
    console.log('user', user);
  } catch (e: any) {
    console.log('error', e);
    console.log('error message', e.message);
    const errorCode = e.code;
    const errorMessage = e.message;

    const email = e.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(e);
  }
};

const fbAuth = {
  loginWithGoogle,
};

export default fbAuth;
