// components/ActionButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ text, onPress, color = '#27ae60' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
