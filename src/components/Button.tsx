import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';

interface IButtonProps {
  buttonText: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
}
export default function Button({
  buttonText,
  onPress,
  disabled,
  style,
}: IButtonProps) {
  const containerStyle = useMemo(
    () => [
      {...style},
      styles.container,
      {
        backgroundColor: disabled ? 'grey' : 'white',
        shadowColor: disabled ? 'white' : 'grey',
      },
    ],
    [disabled],
  );
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
  },
});
