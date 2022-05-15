import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
interface IInputProps {
  label?: string;
  onChangeText: (text: string) => void;
}
export default function Input({label, onChangeText}: IInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput onChangeText={onChangeText} style={styles.inputStyle} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  inputStyle: {
    borderWidth: 1,
    height: 50,
    width: Dimensions.get('window').width * 0.6,
    fontSize: 20,
    paddingHorizontal: 12,
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
  },
});
