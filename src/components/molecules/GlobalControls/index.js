import React from 'react';
import { Button, Icon } from 'antd';
import './GlobalControls.css';

const GlobalControls = ({setIndexBack, resetIndex}) => {
  return (
    <div className="slide-viewer-controls">
      <Button
        size="small"
        onClick={setIndexBack}
      >
        <Icon type="left"/>
        Back
      </Button>
      <Button
        size="small"
        onClick={resetIndex}
      >
        <Icon type="home"/>
        Home
      </Button>
    </div>
  );
}

export default GlobalControls;