import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function InputField({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});
