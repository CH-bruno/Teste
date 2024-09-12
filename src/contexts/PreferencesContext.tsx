import React from 'react';

// Define o tipo para o contexto de preferências
interface PreferencesContextType {
  toggleTheme: () => void; // Função para alternar o tema (claro/escuro)
  isThemeDark: boolean;    // Estado que indica se o tema escuro está ativado
}

// Cria o contexto de preferências com um valor padrão
export const PreferencesContext = React.createContext<PreferencesContextType>({
  toggleTheme: () => {}, // Função padrão vazia
  isThemeDark: false,   // Valor padrão para o estado do tema
});   
