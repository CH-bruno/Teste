import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch, Appbar, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../contexts/PreferencesContext';

/**
 * Componente de Cabeçalho (Header) para alternar entre os temas claro e escuro.
 * Utiliza o tema do `react-native-paper` para aplicar estilos e o contexto de preferências para gerenciar o estado do tema.
 */
const Header: React.FC = () => {
  // Obtém o tema atual aplicado pelo PaperProvider
  const { colors } = useTheme();

  // Acessa o contexto de preferências para obter a função de alternância e o estado do tema
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      {/* Conteúdo do cabeçalho (título está vazio) */}
      <Appbar.Content title="" />
      
      {/* Contêiner para o texto e o switch */}
      <View style={styles.switchContainer}>
        {/* Texto que indica o tema atual */}
        <Text style={[styles.text, { color: colors.onPrimary }]}>
          {isThemeDark ? 'Escuro' : 'Claro'}
        </Text>
        
        {/* Switch para alternar entre os modos de tema */}
        <Switch 
          value={isThemeDark} 
          color={colors.primary} 
          onValueChange={toggleTheme} 
        />
      </View>
    </Appbar.Header>
  );
};

// Estilos para o contêiner do switch e o texto
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  text: {
    marginRight: 10,
  },
});

export default Header;
