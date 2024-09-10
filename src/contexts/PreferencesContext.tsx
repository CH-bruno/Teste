import React from 'react';

interface PreferencesContextType {
  toggleTheme: () => void;
  isThemeDark: boolean;
}

export const PreferencesContext = React.createContext<PreferencesContextType>({
  toggleTheme: () => {},
  isThemeDark: false,
});
