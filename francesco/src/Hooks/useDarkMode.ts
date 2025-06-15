import { createContext, useContext } from 'react';

export interface DarkModeContextType {
  isDarkSectionVisible: boolean;
  forceRecheck: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};
