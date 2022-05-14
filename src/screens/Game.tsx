import React from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Cell from '../components/Cell';
import {useOvermind} from '../overmind';

export default function Game() {
  const {state, actions} = useOvermind();
  const renderItem = ({item}) => (
    <Cell
      cellInfo={item}
      onCellPressed={actions.onCellPressed}
      disabled={state.cells[item.index].disabled}
    />
  );
  return (
    <View style={styles.pageContainer}>
      <Text>{`Current Player : ${state.currentPlayerClass}`}</Text>
      <FlatList
        data={Object.values(state.cells)}
        renderItem={renderItem}
        keyExtractor={item => item.index}
        numColumns={3}
      />
      <Text style={{marginTop: 20, fontSize: 32}}>{state.gameStatusText}</Text>
      <TouchableOpacity onPress={actions.resetGame}>
        <Text>reset game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
});
