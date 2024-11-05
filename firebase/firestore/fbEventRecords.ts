import firestore from '@react-native-firebase/firestore';

const getEventRecordByEmail = async (email: string) => {
  let eventRecord: any[] = [];
  const snapshot = await firestore().collection('event-records').where('email', '==', email).get();
  if (snapshot.empty) {
    return [];
  }
  eventRecord = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return eventRecord;
};

const fbEventRecords = {
  getEventRecordByEmail,
};

export default fbEventRecords;
