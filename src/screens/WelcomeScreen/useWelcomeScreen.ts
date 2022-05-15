import React, {useCallback, useMemo} from 'react';
import {useOvermind} from '../../overmind';

export default function useWelcomeScreen() {
  const {actions, state} = useOvermind();
  const handleChangeX = useCallback((name: string) => {
    actions.updatePlayerName({playerClass: 'X', name});
  }, []);
  const handleChangeO = useCallback((name: string) => {
    actions.updatePlayerName({playerClass: 'O', name});
  }, []);
  const handleStartGame = useCallback(() => {
    actions.switchScreen('Game');
  }, []);
  const isStartDisabled = useMemo(
    () => state.players['X'].name === '' || state.players['O'].name === '',
    [state.players['X'].name, state.players['O'].name],
  );
  return {handleChangeO, handleChangeX, handleStartGame, isStartDisabled};
}
