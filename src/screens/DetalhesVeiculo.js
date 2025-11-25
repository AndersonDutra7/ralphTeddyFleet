import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Detalhes do Veículo</Text>

        <View style={styles.card}>
          <View style={styles.itemRow}>
            <FontAwesome
              name="car"
              size={24}
              color="#8B4513"
              style={styles.icon}
            />
            <Text style={styles.item}>
              Modelo:{' '}
              <Text style={styles.itemValue}>{veiculo.modelo}</Text>{' '}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <FontAwesome
              name="id-card"
              size={24}
              color="#8B4513"
              style={styles.icon}
            />
            <Text style={styles.item}>
              Placa: <Text style={styles.itemValue}>{veiculo.placa}</Text>{' '}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <FontAwesome
              name="cogs"
              size={24}
              color="#8B4513"
              style={styles.icon}
            />
            <Text style={styles.item}>
              Marca: <Text style={styles.itemValue}>{veiculo.marca}</Text>{' '}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <FontAwesome
              name="calendar"
              size={28}
              color="#8B4513"
              style={styles.icon}
            />
            <Text style={styles.item}>
              Ano: <Text style={styles.itemValue}>{veiculo.ano}</Text>{' '}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <FontAwesome
              name="check-circle"
              size={30}
              color={veiculo.status === 'Ativo' ? '#00FF00' : '#FF0000'}
              style={styles.icon}
            />
            <Text style={styles.item}>
              Status:{' '}
              <Text style={styles.itemValue}>{veiculo.status}</Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  item: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  itemValue: {
    fontWeight: '300',
  },
});
