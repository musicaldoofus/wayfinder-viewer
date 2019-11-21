import React from 'react';
import './Controls.css';

const Controls = ({setIndexBack, resetIndex}) => {
  return (
    <div className="slide-viewer-controls">
      <button
        onClick={setIndexBack}
      >
        <span>&larr;</span>
        Back
      </button>
      <button
        onClick={resetIndex}
      >
        Restart
      </button>
    </div>
  );
}

export default Controls;