import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from '../services/supabase';

export default function ListaVeiculos({ navigation }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function carregar() {
      const { data, error } = await supabase.from('veiculos').select('*');
      if (!error) setLista(data);
      else console.log('Erro ao carregar veículos:', error.message);
    }
    carregar();
  }, []);

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Veículos</Text>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Detalhes', { veiculo: item })}
            >
              <View style={styles.row}>
                <FontAwesome name="car" size={26} color="#FFD700" />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.nome}>{item.modelo}</Text>
                  <Text style={styles.placa}>{item.placa}</Text>
                </View>
              </View>

              <View style={styles.statusRow}>
                <FontAwesome
                  name="check-circle"
                  size={22}
                  color={item.status === 'Ativo' ? '#00FF00' : '#FF0000'}
                />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </TouchableOpacity>
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

  card: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },

  statusText: {
    marginLeft: 6,
    color: '#fff',
    fontWeight: '600',
  },
});
