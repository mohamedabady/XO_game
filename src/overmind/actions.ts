import {Action} from 'overmind';
import {numbersArray, winningCombinations} from '../constants';

export const disableAllCells: Action = ({state}) => {
  let cells = Object.values(state.cells);
  cells.forEach(cell => (cell.disabled = true));
  state.cells = Object.assign({}, ...cells.map(c => ({[c.index]: c})));
};
export const checkGameStatus: Action = ({state, actions}) => {
  const {currentPlayerClass, players} = state;
  //check win
  const hasWon = winningCombinations.some(combination => {
    let didWin = combination.every(index =>
      players[currentPlayerClass].cellsMarked.includes(index),
    );
    if (didWin) {
      state.winningCombination = [...combination];
    }
    return didWin;
  });
  // check draw
  const isDraw =
    players['O'].cellsMarked.length + players['X'].cellsMarked.length === 9 &&
    !hasWon;

  if (hasWon) {
    state.gameStatus = currentPlayerClass === 'X' ? 'X-won' : 'O-won';
    state.gameStatusText = `${currentPlayerClass} : Player ${players[currentPlayerClass].name} has won`;
    state.winningCombination.forEach(
      index => (state.cells[index].backgroundColor = 'green'),
    );
    actions.disableAllCells();
  } else if (isDraw) {
    state.gameStatus = 'Draw';
    state.gameStatusText = `It's a Draw. Reset and Play Again!!`;
  } else {
    state.currentPlayerClass = state.currentPlayerClass === 'X' ? 'O' : 'X';
  }
};
export const onCellPressed: Action<number> = ({state, actions}, index) => {
  state.cells[index].value = state.currentPlayerClass;
  state.cells[index].disabled = true;
  state.players[state.currentPlayerClass].cellsMarked.push(index);
  actions.checkGameStatus();
};

export const resetGame: Action = ({state}) => {
  state.players = {
    X: {name: '', class: 'X', cellsMarked: []},
    O: {name: '', class: 'O', cellsMarked: []},
  };
  state.currentPlayerClass = state.currentPlayerClass;
  state.cells = Object.assign(
    {},
    ...numbersArray.map(i => ({
      [i.toString()]: {index: i, value: '', disabled: false},
    })),
  );
  state.gameStatus = 'Progress';
  state.gameStatusText = '';
};
