import React, { useState } from 'react';
import mockConfig from './helpers/mockConfig';
import SlideViewer from './components/molecules/SlideViewer';
import './App.css';

const App = () => {
  const [indexHistory, setIndexHistory] = useState([0]);

  const updateIndex = (toIndex) => {
    setIndexHistory(indexHistory.concat(toIndex));
  }

  const resetIndex = () => {
    setIndexHistory([0]);
  }

  const setIndexBack = () => {
    const targetIndex = indexHistory.length > 3 ? indexHistory.length - 2 : 1;
    setIndexHistory(indexHistory.slice(0, targetIndex));
  }

  const getCurrentIndex = () => {
    return indexHistory[indexHistory.length - 1];
  }

  return (
    <div className="app">
      <div className="wayfinder-container">
        <div className="wayfinder-metadata">
          <h5>{mockConfig.metadata.title}</h5>
        </div>
        <SlideViewer
          config={mockConfig}
          setIndexBack={setIndexBack}
          resetIndex={resetIndex}
          updateIndex={updateIndex}
          getCurrentIndex={getCurrentIndex}
        />
      </div>
    </div>
  );
}

export default App;