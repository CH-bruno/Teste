import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Início: undefined;
  Detalhes: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Início'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detalhes'>;
