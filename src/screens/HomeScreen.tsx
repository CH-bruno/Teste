import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Header from '../components/Header';

// Definição das propriedades do componente HomeScreen
interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Início'>;
}

// Componente funcional HomeScreen
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Obtém as cores do tema atual usando o hook useTheme do react-native-paper
  const { colors } = useTheme();
  // Define a cor do texto com base no tema ou usa 'black' como cor padrão
  const textColor = colors.onBackground || 'black';

  return (
    <>
      {/* Componente Header que pode conter um cabeçalho personalizado */}
      <Header />
      {/* View principal do componente */}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Imagem com estilo definido */}
        <Image
          source={require('../assets/images/favicon.png')}
          style={styles.image}
          resizeMode="contain" // Ajusta o modo de redimensionamento da imagem
        />
        {/* Texto principal da tela com cor baseada no tema */}
        <Text style={[styles.text, { color: textColor }]}>Bem-vindo ao Início!</Text>
      </View>
    </>
  );
};

// Estilos para o componente HomeScreen
const styles = StyleSheet.create({
  // Estilo para o container da tela
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilo para a imagem exibida na tela
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  // Estilo para o espaçamento, atualmente não utilizado
  spacing: {
    height: 20, // Ajuste este valor para aumentar ou diminuir o espaço entre os elementos
  },
  // Estilo para o texto na tela, adicionalmente pode ser personalizado
  text: {
    // Adicione estilos adicionais se necessário
  },
});

export default HomeScreen;
