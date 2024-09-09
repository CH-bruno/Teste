// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useTheme, Button as PaperButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Início'>;
  toggleTheme: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, toggleTheme }) => {
  const { colors } = useTheme();
  const textColor = colors.onBackground || 'black'; // Use a cor padrão se a cor do texto não estiver definida

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={require('../assets/images/favicon.png')} style={styles.image} />
      <Text style={{ color: textColor }}>Bem-vindo ao Início!</Text>
      <View style={styles.spacing} />
      <PaperButton icon="theme-light-dark" mode="contained" onPress={toggleTheme}>
        Alterar Tema
      </PaperButton>
      <View style={styles.spacing} />
      <PaperButton
        icon="chevron-right"
        mode="contained"
        onPress={() => navigation.navigate('Detalhes')}
      >
        Ir para Detalhes
      </PaperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  spacing: {
    height: 20, // Ajuste este valor para aumentar ou diminuir o espaço entre os botões
  },
});

export default HomeScreen;
