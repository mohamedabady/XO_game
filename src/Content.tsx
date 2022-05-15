import {View, Text} from 'react-native';
import React from 'react';
import {useOvermind} from './overmind';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import Game from './screens/Game';

export default function Content() {
  const {
    state: {currentScreen},
  } = useOvermind();
  return currentScreen === 'Welcome' ? <WelcomeScreen /> : <Game />;
}
