import React, { useState, useMemo, useCallback } from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider, MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import merge from 'deepmerge';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList } from './types';
import { PreferencesContext } from './contexts/PreferencesContext';
import Header from './components/Header'; // Ajuste o caminho conforme sua estrutura

// Adaptar temas do React Navigation ao Material Design 3
const { LightTheme: NavigationLightTheme, DarkTheme: NavigationDarkThemeAdapted } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

// Mesclar temas
const CombinedDefaultTheme = merge(MD3LightTheme, NavigationLightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, NavigationDarkThemeAdapted);

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const preferences = useMemo(() => ({
    toggleTheme,
    isThemeDark: isDarkMode,
  }), [toggleTheme, isDarkMode]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        settings={{
          icon: props => <MaterialCommunityIcons {...props} />,
        }}
        theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}
      >
        <NavigationContainer theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
          <Stack.Navigator
            screenOptions={({ navigation, route }) => ({
              header: () => <Header navigation={navigation} route={route} />, // Passar navigation e route
            })}
            initialRouteName="Início"
          >
            <Stack.Screen name="Início" component={HomeScreen} />
            <Stack.Screen name="Detalhes" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
