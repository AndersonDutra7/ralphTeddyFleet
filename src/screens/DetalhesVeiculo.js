import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import DetalheItem from '../components/DetalheItem';
import ActionButton from '../components/ActionButton';
import { Alert } from 'react-native';
import { excluirVeiculo } from '../services/veiculoService';

export default function DetalhesVeiculo({ route, navigation }) {
  const { veiculo } = route.params;
  const [veiculoState, setVeiculoState] = useState(veiculo);

  async function confirmarExclusao() {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este veículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const { error } = await excluirVeiculo(veiculo.id);

              if (error) {
                Alert.alert('Erro', 'Não foi possível excluir o veículo');
              } else {
                Alert.alert('Sucesso', 'Veículo excluído com sucesso');

                // Atualiza a lista se houver callback
                if (route.params?.onSave) {
                  route.params.onSave();
                }

                navigation.goBack();
              }
            } catch (e) {
              console.log(e);
              Alert.alert('Erro', 'Falha ao excluir veículo');
            }
          },
        },
      ],
    );
  }

  function confirmarExclusaoWeb(callback) {
    if (typeof window !== 'undefined' && window.confirm) {
      // window.confirm retorna true se clicar em OK
      const ok = window.confirm('Tem certeza que deseja excluir este veículo?');
      if (ok) callback();
    } else {
      Alert.alert(
        'Confirmar exclusão',
        'Tem certeza que deseja excluir este veículo?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Excluir', style: 'destructive', onPress: callback },
        ],
      );
    }
  }

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
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <ActionButton
              text="Editar"
              color="#3498db"
              onPress={() =>
                navigation.navigate('FormVeiculo', {
                  veiculo,
                  onSave: route.params?.onSave, // repassa callback da lista
                })
              }
            />
          </View>

          <View style={styles.actionItem}>
            {/* <ActionButton
              text="Excluir"
              color="#e74c3c"
              onPress={confirmarExclusao}
            /> */}
            <ActionButton
              text="Excluir"
              color="#e74c3c"
              onPress={() =>
                confirmarExclusaoWeb(async () => {
                  try {
                    const { error } = await excluirVeiculo(veiculo.id);

                    if (error) {
                      Alert.alert('Erro', 'Não foi possível excluir o veículo');
                    } else {
                      Alert.alert('Sucesso', 'Veículo excluído com sucesso');

                      if (route.params?.onSave) {
                        route.params.onSave();
                      }

                      navigation.goBack();
                    }
                  } catch (e) {
                    console.log(e);
                    Alert.alert('Erro', 'Falha ao excluir veículo');
                  }
                })
              }
            />
          </View>
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
  actions: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },

  actionItem: {
    flex: 1,
  },
});
