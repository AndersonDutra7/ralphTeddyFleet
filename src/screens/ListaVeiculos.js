import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { listarVeiculos } from '../services/veiculoService';
import CardVeiculo from '../components/CardVeiculo';
import ActionButton from '../components/ActionButton';

export default function ListaVeiculos({ navigation }) {
  const [lista, setLista] = useState([]);

  async function carregarVeiculos() {
    const { data, error } = await listarVeiculos();
    if (!error) setLista(data);
    else console.log('Erro ao carregar veículos:', error.message);
  }

  useEffect(() => {
    carregarVeiculos();
  }, []);

  return (
    <LinearGradient colors={['#2D1E2F', '#3A1C71']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Veículos</Text>

        <ActionButton
          text="+ Novo Veículo"
          onPress={() =>
            navigation.navigate('FormVeiculo', {
              onSave: carregarVeiculos,
            })
          }
        />

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardVeiculo
              veiculo={item}
              onPress={() => navigation.navigate('Detalhes', { veiculo: item })}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },

  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
