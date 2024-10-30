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
  return auth().signInWithCredential(googleCredentials);
};

const getCurrentUser = () => {
  return auth().currentUser;
};

const getGoogleUser = () => {
  return GoogleSignin.getCurrentUser();
};

const googleSignOut = async () => {
  if (getGoogleUser()) {
    return GoogleSignin.signOut();
  }

  return Promise.resolve();
};

const fbSignOut = async () => {
  if (getCurrentUser()) {
    return auth().signOut();
  }

  return Promise.resolve();
};

const signOut = async () => {
  await googleSignOut();
  await fbSignOut();
};

const fbAuth = {
  loginWithGoogle,
  signOut,
  getCurrentUser,
};

export default fbAuth;
