import React, { useState, useMemo, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList } from './types';
import { PreferencesContext } from './contexts/PreferencesContext';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { lightTheme, darkTheme } from './themes/theme';

// Cria o stack navigator para a navegação empilhada
const Stack = createStackNavigator<RootStackParamList>();

// Cria o bottom tab navigator para a navegação por abas
const Tab = createMaterialBottomTabNavigator();

const App: React.FC = () => {
  // Estado para gerenciar se o modo escuro está ativado ou não
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar entre o modo claro e escuro
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []); 

  // Cria um contexto para fornecer a função de alternância e o estado do tema
  const preferences = useMemo(() => ({
    toggleTheme,
    isThemeDark: isDarkMode,
  }), [toggleTheme, isDarkMode]);

  // Define o tema atual com base no estado do modo escuro
  const theme = isDarkMode ? darkTheme : lightTheme;


  return (
    // Fornece o contexto de preferências para os componentes filhos
    <PreferencesContext.Provider value={preferences}>
      {/* Provedor do Paper para fornecer o tema aos componentes do react-native-paper */}
      <PaperProvider 
        settings={{
          icon: props => <MaterialCommunityIcons {...props} />, // Configura o ícone padrão
        }}
        theme={theme} // Aplica o tema atual
      >
        {/* Contêiner de navegação com o tema atual */}
        <NavigationContainer theme={theme}>
          {/* Navegação por abas com tema material */}
          <Tab.Navigator
            initialRouteName="Home" // Define a rota inicial
            activeColor={theme.colors.text} // Cor dos ícones ativos
            inactiveColor={theme.colors.border} // Cor dos ícones inativos
            barStyle={theme.barStyle} // Estilo da barra inferior
          >
            {/* Tela Home */}
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Início', // Rótulo da aba
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            {/* Tela Details */}
            <Tab.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                tabBarLabel: 'Detalhes', // Rótulo da aba
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="information" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
