import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { DetailsScreenNavigationProp } from '../types';
import Header from '../components/Header';

// Definição das propriedades do componente DetailsScreen
interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
}

// Componente funcional DetailsScreen
const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  // Obtém as cores do tema atual usando o hook useTheme do react-native-paper
  const { colors } = useTheme();

  return (
    <>
      {/* Componente Header que pode conter um cabeçalho personalizado */}
      <Header />
      {/* View principal do componente */}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.onBackground }]}>Detalhes</Text>
      </View>
    </>
  );
};

// Estilos para o componente DetailsScreen
const styles = StyleSheet.create({
  // Estilo para o container da tela
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  // Estilo para o título da tela
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default DetailsScreen;
