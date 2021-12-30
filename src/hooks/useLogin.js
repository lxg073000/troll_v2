import { useState, useEffect } from "react";
import { auth, db } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password);

      // dispatch login action
      await dispatch({ type: "LOGIN", payload: res.user });

      // update online:bool for currentUser doc in db to false
      const docRef = await doc(db, `users/${res.user.uid}`);
      updateDoc(docRef, { online: true });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      debugger;
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
