import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SelectInput({
  label,
  selectedValue,
  onValueChange,
  options = [],
}) {
  const [visible, setVisible] = useState(false);
  const [layout, setLayout] = useState(null);

  const selectedLabel =
    options.find((o) => o.value === selectedValue)?.label || 'Selecione';

  return (
    <View
      style={styles.container}
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
    >
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable style={styles.input} onPress={() => setVisible(true)}>
        <Text style={styles.text}>{selectedLabel}</Text>
        <MaterialCommunityIcons name="arrow-down-bold" size={20} color="#555" />
      </Pressable>

      {layout && (
        <Modal transparent visible={visible} animationType="fade">
          <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
            <View
              style={[
                styles.dropdown,
                {
                  width: layout.width,
                  top: layout.y + layout.height + 5,
                  left: layout.x,
                },
              ]}
            >
              <FlatList
                data={options}
                keyExtractor={(item) => String(item.value)}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      onValueChange(item.value);
                      setVisible(false);
                    }}
                  >
                    <Text>{item.label}</Text>
                  </Pressable>
                )}
              />
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  arrow: {
    fontSize: 12,
    color: '#555',
  },
  overlay: {
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  option: {
    padding: 12,
  },
});
