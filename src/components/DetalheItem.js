import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function DetalheItem({
  icon,
  label,
  value,
  iconColor = '#FFD700',
}) {
  return (
    <View style={styles.row}>
      <FontAwesome
        name={icon}
        size={24}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={styles.label}>
        {label}: <Text style={styles.value}>{value}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  value: {
    fontWeight: '300',
  },
});
