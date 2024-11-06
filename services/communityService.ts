import { useEffect, useState } from 'react';
import fbUsers from '@/firebase/firestore/fbUsers';

import { FbUser } from '@/models/FbUser';

const useCommunityScreenService = () => {
  const [users, setUsers] = useState<FbUser[]>([]);

  const getAllUsers = async () => {
    const results: FbUser[] = await fbUsers.getAllUsers();
    if (results) {
      const userOrderedByPoints = results.sort((a, b) => (a.points || 0) - (b.points || 0));
      const userFilteredPhotoUrlNameEqualsNull = userOrderedByPoints.filter(
        (user) => user.photoURL && user.displayName,
      );
      setUsers(userFilteredPhotoUrlNameEqualsNull);
    }
  };

  useEffect(() => {
    getAllUsers().then();
  }, []);

  return { users, getAllUsers };
};

const communityService = {
  useCommunityScreenService,
};

export default communityService;
