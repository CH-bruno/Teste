import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#00BFFF', // Azul claro
    secondary: '#FFD700', // Amarelo
    background: '#FFFFFF', // Cor de fundo clara

  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#00BFFF', // Azul claro
    secondary: '#FFD700', // Amarelo
    background: '#000000', // Cor de fundo escura

  },
};
