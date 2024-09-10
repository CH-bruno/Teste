import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme, Button as PaperButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Header from '../components/Header';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Início'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const textColor = colors.onBackground || 'black';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require('../assets/images/favicon.png')}
        style={styles.image}
        resizeMode="contain" // Atualizado para usar props.resizeMode
      />
      <Text style={[styles.text, { color: textColor }]}>Bem-vindo ao Início!</Text>
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
  text: {
    // Adicione estilos adicionais se necessário
  },
});

export default HomeScreen;
