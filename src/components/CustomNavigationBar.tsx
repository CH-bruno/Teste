import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

const CustomNavigationBar: React.FC<any> = ({ navigation, route, options, back }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const title = getHeaderTitle(options, route.name);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item onPress={() => {}} title="Option 1" />
          <Menu.Item onPress={() => {}} title="Option 2" />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
