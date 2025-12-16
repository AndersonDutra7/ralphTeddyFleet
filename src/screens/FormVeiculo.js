import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { criarVeiculo, editarVeiculo } from '../services/veiculoService';
import { validarCamposObrigatorios } from '../utils/validators';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import SelectInput from '../components/SelectInput';

export default function FormVeiculo({ navigation, route }) {
  const veiculoEdit = route?.params?.veiculo;
  const [modelo, setModelo] = useState(veiculoEdit?.modelo || '');
  const [placa, setPlaca] = useState(veiculoEdit?.placa || '');
  const [marca, setMarca] = useState(veiculoEdit?.marca || '');
  const [ano, setAno] = useState(veiculoEdit?.ano?.toString() || '');
  const [status, setStatus] = useState(veiculoEdit?.status || 'ativo');
  const [loading, setLoading] = useState(false);

  async function salvar() {
    const campos = { modelo, placa, marca, ano, status };
    console.log('Campos antes da validação:', campos);

    if (!validarCamposObrigatorios(campos)) {
      return Alert.alert(
        'Erro',
        'Os campos obrigatórios devem ser preenchidos!',
      );
    }

    setLoading(true);

    const veiculo = {
      modelo,
      placa,
      marca,
      ano: ano ? Number(ano) : null,
      status: status === 'ativo',
    };
    const { error } = veiculoEdit
      ? await editarVeiculo(veiculoEdit.id, veiculo)
      : await criarVeiculo(veiculo);

    console.log('Objeto veiculo a enviar:', veiculo);

    setLoading(false);

    if (error) {
      Alert.alert('Erro', 'Falha ao salvar veículo');
    } else {
      Alert.alert(
        'Sucesso',
        `Veículo ${veiculoEdit ? 'atualizado' : 'cadastrado'}!`,
      );

      if (route.params?.onSave) {
        route.params.onSave(); // atualiza a lista
      }

      navigation.goBack(); // volta para a tela anterior
    }

    console.log('Resposta do serviço:', { error });
  }

  return (
    <LinearGradient colors={['#2D1E2F', '#3A1C71']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {veiculoEdit ? 'Editar Veículo' : 'Novo Veículo'}
        </Text>
        <InputField
          placeholder={'Modelo'}
          value={modelo}
          onChangeText={setModelo}
        ></InputField>
        <InputField
          placeholder={'Placa'}
          value={placa}
          onChangeText={setPlaca}
        ></InputField>
        <InputField
          placeholder={'Marca'}
          value={marca}
          onChangeText={setMarca}
        ></InputField>
        <InputField
          placeholder={'Ano'}
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
        ></InputField>
        <SelectInput
          label="Status"
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
          options={[
            { label: 'Ativo', value: 'ativo' },
            { label: 'Inativo', value: 'inativo' },
          ]}
        />

        <SubmitButton
          loading={loading}
          onPress={salvar}
          text={'Salvar'}
        ></SubmitButton>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 20 },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
