import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { lightTheme, darkTheme } from './themes/theme';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <PaperProvider
      settings={{
        icon: props => <MaterialCommunityIcons {...props} />,
      }}
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Início">
          <Stack.Screen name="Início">
            {(props) => <HomeScreen {...props} toggleTheme={toggleTheme} />}
          </Stack.Screen>
          <Stack.Screen name="Detalhes" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
