import { useState, useEffect } from 'react';
import { User, getAuth } from 'firebase/auth';

const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: User) => {
    if (!authState) {
      setAuthUser(undefined);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser as unknown as User);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(
      authStateChanged as unknown as (a: User | null) => void
    );
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
