import {Action} from 'overmind';
import {numbersArray, winningCombinations} from '../constants';
import {CellValue, GameScreen} from '../types';

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
    state.gameStatusText = `${players[currentPlayerClass].name} has won  :  (${state.currentPlayerClass})`;
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
  state.players['X'].cellsMarked = [];
  state.players['O'].cellsMarked = [];
  state.cells = Object.assign(
    {},
    ...numbersArray.map(i => ({
      [i.toString()]: {index: i, value: '', disabled: false},
    })),
  );
  state.gameStatus = 'Progress';
  state.gameStatusText = '';
};

export const updatePlayerName: Action<{
  playerClass: CellValue;
  name: string;
}> = ({state}, {playerClass, name}) => {
  state.players[playerClass].name = name;
};

export const switchScreen: Action<GameScreen> = ({state}, screen) => {
  state.currentScreen = screen;
};

export const quitGame: Action = ({state, actions}) => {
  actions.resetGame();
  state.players['X'].name = '';
  state.players['O'].name = '';
  state.currentPlayerClass = 'X';
  actions.switchScreen('Welcome');
};
