import { useContext } from "react";
import { AuthContent } from "../content/AuthContent";

export const useAuthContent = () => {
  const context = useContext(AuthContent);
  // if (!context) {
  //   throw Error("useAuthContext must be inside useAuthContextProvider");
  // }

  return context;
};
