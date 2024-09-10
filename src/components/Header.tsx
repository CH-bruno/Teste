import React from 'react';
import { useTheme, Appbar, Switch } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { PreferencesContext } from '../contexts/PreferencesContext';
import { RootStackParamList } from '../types';

interface HeaderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}

const Header: React.FC<HeaderProps> = ({ navigation, route }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme.colors.surface,
        },
      }}
    >
      <Appbar.Content title={route.name} />
      <Switch
        color={'red'}
        value={isThemeDark}
        onValueChange={toggleTheme}
      />
    </Appbar.Header>
  );
};

export default Header;
