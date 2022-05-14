import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ICell} from '../types';

export default function Cell({
  cellInfo: {index, value, backgroundColor},
  onCellPressed,
  disabled,
}: {
  cellInfo: ICell;
  onCellPressed: (index: number) => void;
  disabled: boolean;
}) {
  const onCurrentCellPress = () => onCellPressed(index);
  return (
    <View key={index} style={[styles.cellContainer, {backgroundColor}]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onCurrentCellPress}
        style={styles.cellButton}>
        <Text style={{fontSize: 32}}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    alignItems: 'center',
  },
  cellButton: {
    width: '100%',
    height: Dimensions.get('window').width / 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
