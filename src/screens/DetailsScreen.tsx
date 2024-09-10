import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, Button as PaperButton } from 'react-native-paper';
import { DetailsScreenNavigationProp } from '../types';

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>Detalhes</Text>
      <PaperButton
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Voltar
      </PaperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default DetailsScreen;
