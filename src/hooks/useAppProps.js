import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const useAppProps = () => {
  const context = useContext(AppContext);
  if (context === null || context === undefined) {
    throw new Error("useAppProps must be used inside AppProvider");
  }
  return context;
};
