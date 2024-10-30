import firestore from '@react-native-firebase/firestore';

const getAllEvents = async () => {
  const events: any[] = [];
  try {
    const querySnapshot = await firestore().collection('events').get();
    querySnapshot.forEach((doc) => {
      events.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.log('getAllEvents error:', error);
  }
  return events;
};

const fbEvents = {
  getAllEvents,
};

export default fbEvents;
