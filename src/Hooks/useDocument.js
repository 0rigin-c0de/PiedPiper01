import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);

  useEffect(() => {
    setIspending(true);
    const ref = projectFireStore.collection(collection).doc(id);

    const ubsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
          setIspending(false);
        } else {
          setError("No Such document exits");
          setIspending(false);
        }
      },
      (err) => {
        setError("Failed to get  document");
      }
    );

    return () => ubsub();
  }, [collection, id]);

  return { document, error, isPending };
};
