import { useReducer, useState, useEffect } from "react";
import { projectFireStore, timeStamp } from "../firebase";

const initialState = {
  document: null,
  error: null,
  success: null,
  Ispending: false,
};

const fireStoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { Ispending: true, document: null, error: null, success: null };
    case "ADD_DOCUMENT":
      return {
        document: action.payload,
        success: true,
        error: null,
        Ispending: false,
      };
    case "DELETE_DOCUMENT":
      return { document: null, success: false, error: false, Ispending: false };
    case "UPDATE_DOCUMENT":
      return {
        document: action.payload,
        success: true,
        error: null,
        Ispending: false,
      };
    case "ERROR":
      return {
        document: null,
        success: false,
        error: action.payload,
        Ispending: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useFireStore = (collection) => {
  const [response, dispatch] = useReducer(fireStoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //collection ref
  const ref = projectFireStore.collection(collection);

  //only dispatch is not cancelled
  const dispatchIfnotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //add user document

  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createAt = timeStamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createAt });
      dispatchIfnotCancelled({ type: "ADD_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatchIfnotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //delete user docuement

  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfnotCancelled({ type: "DELETE_DOCUMENT" });
    } catch (err) {
      dispatchIfnotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //update document

  const UpdateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updateDocument = await ref.doc(id).update(updates);
      dispatchIfnotCancelled({
        type: "UPDATE_DOCUMENT",
        payload: updateDocument,
      });
    } catch (err) {
      dispatchIfnotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // for clean up function
  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return { response, addDocument, deleteDocument, UpdateDocument };
};
