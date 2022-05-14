import React from 'react';
import {config} from './src/overmind';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import Game from './src/screens/Game';

const overmind = createOvermind(config, {
  devtools: 'localhost:3031',
});

export default function App() {
  return (
    <Provider value={overmind}>
      <Game />
    </Provider>
  );
}
