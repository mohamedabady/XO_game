import React from 'react';
import {config} from './src/overmind';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import Content from './src/Content';

const overmind = createOvermind(config, {
  devtools: 'localhost:3031',
});

export default function App() {
  return (
    <Provider value={overmind}>
      <Content />
    </Provider>
  );
}
