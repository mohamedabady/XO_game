import React from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../components/Button';
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
      <Text style={styles.headerText}>{`Current Player : ${
        state.players[state.currentPlayerClass].name
      }   -   (${state.currentPlayerClass})`}</Text>
      <FlatList
        style={styles.listStyle}
        data={Object.values(state.cells)}
        renderItem={renderItem}
        keyExtractor={item => item.index}
        numColumns={3}
      />
      <Text style={styles.gameStatusText}>{state.gameStatusText}</Text>
      <Button
        style={{marginBottom: 12}}
        buttonText={
          state.gameStatus === 'Progress' ? 'Reset Game' : 'Play Again'
        }
        onPress={actions.resetGame}
      />
      <Button buttonText="Quit Game" onPress={actions.quitGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {fontSize: 20, marginBottom: 20},
  listStyle: {width: '100%'},
  gameStatusText: {marginVertical: 20, fontSize: 32},
});
