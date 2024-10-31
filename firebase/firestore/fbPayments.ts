import firestore from '@react-native-firebase/firestore';

const getPaymentByEmail = async (email: string) => {
  let payment = null;
  try {
    const querySnapshot = await firestore().collection('payments').where('billing.email', '==', email).get();
    if (querySnapshot.empty) {
      return payment;
    }

    querySnapshot.forEach((doc) => {
      payment = doc.data();
      console.log('Payment found: ', payment);
    });
  } catch (error) {
    console.error('Error getting payments by email: ', error);
  }

  return payment;
};

const fbPayments = {
  getPaymentByEmail,
};

export default fbPayments;
