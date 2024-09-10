// src/types.ts
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Início: undefined;
  Detalhes: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Início'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detalhes'>;

export type RootStackNavigationProp = NavigationProp<RootStackParamList>;
export type RootStackRouteProp = RouteProp<RootStackParamList>;
