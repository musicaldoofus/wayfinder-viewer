import React from 'react';
import { Button } from 'antd';
import './ToButton.css';

const ToButton = ({onClick, label}) => {
    return (
        <Button
            type="primary"
            onClick={onClick}
        >
            {label}
        </Button>
    );
}
  
export default ToButton;  