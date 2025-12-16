import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CardVeiculo({ veiculo, onPress }) {
  function getStatusColor(status) {
    if (status === true) return '#00FF00';
    if (status === false) return '#FF0000';
    return '#999';
  }

  function getStatusText(status) {
    if (status === true) return 'Ativo';
    if (status === false) return 'Inativo';
    return 'Indefinido';
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <FontAwesome name="car" size={26} color="#FFD700" />

        <View style={styles.info}>
          <Text style={styles.nome}>
            {veiculo.marca} {veiculo.modelo}
          </Text>
          <Text style={styles.placa}>{veiculo.placa}</Text>
        </View>
      </View>

      <View style={styles.statusRow}>
        <FontAwesome
          name="check-circle"
          size={22}
          color={getStatusColor(veiculo.status)}
        />
        <Text style={styles.statusText}>{getStatusText(veiculo.status)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    marginLeft: 12,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  placa: {
    fontSize: 14,
    color: '#e0e0e0',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  statusText: {
    marginLeft: 6,
    color: '#fff',
    fontWeight: '600',
  },
});
