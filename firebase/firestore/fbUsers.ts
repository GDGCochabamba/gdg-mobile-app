import firestore from '@react-native-firebase/firestore';
import { FbUserCredential } from '@/models/FbUserCredential';

const getUserByEmail = async (email: string) => {
  let user = null;
  try {
    const querySnapshot = await firestore().collection('users').where('email', '==', email).get();
    if (querySnapshot.empty) {
      return user;
    }

    querySnapshot.forEach((doc) => {
      user = doc.data();
      console.log('User found: ', user);
    });
  } catch (error) {
    console.error('Error getting user by email: ', error);
  }

  return user;
};

const createUserByFbUserCredential = async (fbUserCredential: FbUserCredential) => {
  try {
    await firestore().collection('users').doc(fbUserCredential.user.email?.toString()).set({
      displayName: fbUserCredential.user.displayName,
      email: fbUserCredential.user.email,
      photoURL: fbUserCredential.user.photoURL,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error creating user: ', error);
  }
};

const getAllUsers = async () => {
  let users: any = [];
  try {
    const querySnapshot = await firestore().collection('users').get();
    if (querySnapshot.empty) {
      return users;
    }

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
  } catch (error) {
    console.error('Error getting all users: ', error);
  }

  console.log('Users', JSON.stringify(users));
  return users;
};

const fbUsers = {
  getUserByEmail,
  createUserByFbUserCredential,
  getAllUsers,
};

export default fbUsers;
