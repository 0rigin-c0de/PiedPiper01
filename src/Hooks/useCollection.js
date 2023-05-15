import { useState, useRef, useEffect } from "react";
import { projectFireStore } from "../firebase";

export const useCollection = (collection, _query, _order) => {
  const [document, setDocument] = useState("");
  const [error, setError] = useState(null);

  const query = useRef(_query).current;
  const order = useRef(_order).current;

  useEffect(() => {
    let ref = projectFireStore.collection(collection);
    if (query) {
      ref = ref.where(...query);
    }
    if (order) {
      ref = ref.where(...order);
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //update the state

        setDocument(results);

        setError(null);
      },
      (error) => {
        setError("Could not fetch the data");
      }
    );

    //unsub the state
    return () => unsub();
  }, [collection, query, order]);

  return { document, error };
};
