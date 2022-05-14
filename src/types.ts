export interface IState {
  players: Record<CellValue, IPlayer>;
  currentPlayerClass: CellValue | null;
  cells: Record<string, ICell>;
  gameStatus: GameStatus;
  gameStatusText: string;
  winningCombination: number[];
}

export type CellValue = 'X' | 'O';
export type GameStatus = 'Progress' | 'X-won' | 'O-won' | 'Draw';

export interface IPlayer {
  name: string;
  class: CellValue;
  cellsMarked: number[];
}

export interface ICell {
  index: number;
  value: CellValue;
  disabled: boolean;
  backgroundColor: 'green' | 'transparent';
}
