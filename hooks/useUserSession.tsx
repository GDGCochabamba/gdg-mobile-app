import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import fbAuth from '@/firebase/fbAuth';

const useUserSession = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (!user) {
      setUser(null);
    } else {
      setUser(user);
    }
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscribe();
  }, []);

  return { user, getCurrentUser: fbAuth.getCurrentUser };
};

export default useUserSession;
