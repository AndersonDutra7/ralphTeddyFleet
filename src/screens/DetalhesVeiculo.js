import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import DetalheItem from '../components/DetalheItem';

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  return (
    <LinearGradient colors={['#2D1E2F', '#3A1C71']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Detalhes do Veículo</Text>

        <View style={styles.card}>
          <DetalheItem icon="car" label="Modelo" value={veiculo.modelo} />
          <DetalheItem icon="id-card" label="Placa" value={veiculo.placa} />
          <DetalheItem icon="cogs" label="Marca" value={veiculo.marca} />
          <DetalheItem icon="calendar" label="Ano" value={veiculo.ano} />
          <DetalheItem
            icon="check-circle"
            label="Status"
            value={veiculo.status ? 'Ativo' : 'Inativo'}
            iconColor={veiculo.status ? '#00FF00' : '#FF0000'}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    padding: 20,
    flexGrow: 1,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    padding: 20,
  },
});
