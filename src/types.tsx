import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Define os parâmetros das rotas no stack navigator.
 * Utilizado para tipar as rotas no stack navigator e garantir a segurança de tipo nas navegações.
 */
export type RootStackParamList = {
  Início: undefined; // Define a tela de início, sem parâmetros.
  Detalhes: undefined; // Define a tela de detalhes, sem parâmetros.
};

/**
 * Tipo para a navegação na tela 'Início'.
 * Utiliza o tipo StackNavigationProp para a navegação com o stack navigator.
 */
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Início'>;

/**
 * Tipo para a navegação na tela 'Detalhes'.
 * Utiliza o tipo StackNavigationProp para a navegação com o stack navigator.
 */
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detalhes'>;

/**
 * Tipo para a navegação no stack inteiro.
 * Utiliza o tipo NavigationProp para a navegação em qualquer tela do stack.
 */
export type RootStackNavigationProp = NavigationProp<RootStackParamList>;

/**
 * Tipo para as propriedades da rota no stack inteiro.
 * Utiliza o tipo RouteProp para acessar as propriedades da rota em qualquer tela do stack.
 */
export type RootStackRouteProp = RouteProp<RootStackParamList>;
