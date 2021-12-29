import { useState, useEffect } from "react";
import { auth, storage } from "../firebase.config";
import { ref, uploadBytes } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, displayImage) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // upload user displayImage to storage
      const uploadPath = `displayImages/${res.user.uid}/${displayImage.name}`;
      const snapURL = await uploadBytes(
        ref(storage, uploadPath),
        displayImage
      ).then((snap) => ref(snap).getDownloadURL);

      // add displayName and photoURL to firebase User document
      await updateProfile(res.user, { displayName, photoURL: snapURL });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
