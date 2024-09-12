import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#ADD8E6', // Azul bem claro
    background: '#FFFFFF', // Cor de fundo
    card: '#E0F7FA', // Cor do card
    text: '#000000', // Cor do texto
    border: '#CCCCCC', // Cor da borda
    notification: '#FF0000', // Cor da notificação
  },
  // Adicione a configuração para a barra inferior
  barStyle: {
    backgroundColor: '#E0F7FA', // Cor da barra inferior para o tema claro
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#000000', // Preto no tema escuro
    background: '#121212', // Cor de fundo
    card: '#121212', // Cor do card
    text: '#FFFFFF', // Cor do texto
    border: '#444444', // Cor da borda
    notification: '#FF0000', // Cor da notificação
  },
  // Adicione a configuração para a barra inferior
  barStyle: {
    backgroundColor: '#121212', // Cor da barra inferior para o tema escuro
  },
};
