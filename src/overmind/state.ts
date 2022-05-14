import {numbersArray} from '../constants';
import {IState} from '../types';

export const state: IState = {
  players: {
    X: {name: '', class: 'X', cellsMarked: []},
    O: {name: '', class: 'O', cellsMarked: []},
  },
  currentPlayerClass: 'X',
  cells: Object.assign(
    {},
    ...numbersArray.map(i => ({
      [i.toString()]: {
        index: i,
        value: '',
        disabled: false,
        backgroundColor: 'transparent',
      },
    })),
  ),
  gameStatus: 'Progress',
  gameStatusText: '',
  winningCombination: [],
};
