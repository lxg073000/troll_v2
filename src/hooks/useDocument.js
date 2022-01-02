import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const docRef = doc(db, `${collection}/${id}`);
    const unsubDoc = onSnapshot(
      docRef,
      (snap) => {
        const data = snap.data();
        if (!data) {
          setError(new Error("Could not find document").message);
          setIsPending(false);
          return;
        }
        setDocument({ id: snap.id, ...data });
        setIsPending(false);
        setError(null);
      },
      (error) => {
        debugger;
        console.log(error.message);
        setError(error.message);
      }
    );

    return () => unsubDoc();
  }, [collection, id]);

  return { document, isPending, error };
};

export default useDocument;
