import { createContext, useContext } from "react";

type TransitionContextType = {
  navigateWithTransition: (path: string) => void;
};

export const TransitionContext = createContext<
  TransitionContextType | undefined
>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context)
    throw new Error("useTransition must be used within a TransitionProvider");
  return context;
};
