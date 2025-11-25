import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaVeiculos from './screens/ListaVeiculos';
import DetalhesVeiculo from './screens/DetalhesVeiculo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaVeiculos">
        <Stack.Screen
          name="ListaVeiculos"
          component={ListaVeiculos}
          options={{ title: 'Veículos' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesVeiculo}
          options={{ title: 'Detalhes do Veículo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
