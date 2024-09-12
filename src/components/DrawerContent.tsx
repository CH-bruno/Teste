import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { List, Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <List.Item
        title="Home"
        description="Go to Home Screen"
        left={() => <MaterialCommunityIcons name="home" size={24} />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <List.Item
        title="Details"
        description="Go to Details Screen"
        left={() => <MaterialCommunityIcons name="information" size={24} />}
        onPress={() => props.navigation.navigate('Details')}
      />
      <Divider />
      {/* Adicione mais itens conforme necessário */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
