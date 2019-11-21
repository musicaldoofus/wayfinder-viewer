import React from 'react';
import Player from './components/organisms/Player';
import mockConfig from './helpers/mockWayfinderConfig';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Player
        config={mockConfig}
      />
    </div>
  );
}

export default App;