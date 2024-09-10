import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#00BFFF', // Azul claro
    secondary: '#FFD700', // Amarelo
    background: '#FFFFFF', // Cor de fundo clara
    card: '#FFFFFF', // Cor do cartão (definido como fundo claro para o tema claro)
    text: '#000000', // Cor do texto (preto para contraste no fundo claro)
    border: '#CCCCCC', // Cor da borda
    notification: '#FF0000', // Cor de notificação (vermelho para contraste)
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#00BFFF', // Azul claro
    secondary: '#FFD700', // Amarelo
    background: '#000000', // Cor de fundo escura
    card: '#333333', // Cor do cartão (um tom escuro para o tema escuro)
    text: '#FFFFFF', // Cor do texto (branco para contraste no fundo escuro)
    border: '#444444', // Cor da borda
    notification: '#FF0000', // Cor de notificação (vermelho para contraste)
  },
};
