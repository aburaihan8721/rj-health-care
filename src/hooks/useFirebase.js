import initializeFirebase from "../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  },);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return { signInUsingGoogle, user, handleLogout };
};

export default useFirebase;
