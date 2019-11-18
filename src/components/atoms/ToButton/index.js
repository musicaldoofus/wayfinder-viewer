import React from 'react';
import './ToButton.css';

const ToButton = ({onClick, label}) => {
    return (
        <button
            className="to-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
  
export default ToButton;  