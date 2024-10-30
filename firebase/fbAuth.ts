import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const loginWithGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const signInResult: any = await GoogleSignin.signIn();

  let idToken = signInResult?.data?.idToken;

  if (!idToken) {
    idToken = signInResult.idToken;
  }

  if (!idToken) {
    throw new Error('idToken is missing');
  }

  const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
  console.log('googleCredentials', googleCredentials);
  return auth().signInWithCredential(googleCredentials);
};

const fbAuth = {
  loginWithGoogle,
};

export default fbAuth;
