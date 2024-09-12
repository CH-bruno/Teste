import React, { useState, useMemo, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { PreferencesContext } from './contexts/PreferencesContext';
import { lightTheme, darkTheme } from './themes/theme';
import DrawerContent from './components/DrawerContent'; // Ajuste o caminho conforme necessário

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const preferences = useMemo(() => ({
    toggleTheme,
    isThemeDark: isDarkMode,
  }), [toggleTheme, isDarkMode]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        settings={{
          icon: props => <MaterialCommunityIcons {...props} />,
        }}
        theme={theme}
      >
        <NavigationContainer theme={theme}>
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
