import { useEffect, useState, useRef } from "react";
import { db } from "../firebase.config";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export const useCollection = (_collection, _queryArgs, _orderByArgs) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // useRef prevents infiniteLoop in useEffect
  // _queryArgs & _orderByArgs are arrays and are "different" on every function call
  const queryArgs = useRef(_queryArgs).current;
  const orderByArgs = useRef(_orderByArgs).current;

  useEffect(() => {
    let ref = collection(db, _collection);

    if (queryArgs) {
      ref = query(ref, where(...queryArgs));
    }
    if (orderByArgs) {
      ref = query(ref, orderBy(...orderByArgs));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [_collection, queryArgs, orderByArgs]);

  return { documents, error };
};
