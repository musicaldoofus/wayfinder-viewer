import React from 'react';
import './GlobalControls.css';

const GlobalControls = ({setIndexBack, resetIndex}) => {
  return (
    <div className="slide-viewer-controls">
      <button onClick={setIndexBack}>Back</button>
      <button onClick={resetIndex}>Home</button>
    </div>
  );
}

export default GlobalControls;