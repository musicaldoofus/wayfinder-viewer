import React from 'react';
import ToButton from '../../atoms/ToButton';
import './Slide.css';

const Slide = ({onClick, primaryText, secondaryText, buttonList, resources}) => {
  return (
    <div className="slide">
      <div className="primary-text">
        <h1>{primaryText}</h1>
      </div>
      {secondaryText &&
        <div className="secondary-text">
          <h3>{secondaryText}</h3>
        </div>
      }
      {buttonList &&
        <div className="button-list">
          {buttonList.map(({toIndex, label}) => (
            <ToButton
              key={toIndex}
              onClick={() => onClick(toIndex)}
              label={label}
            />
          ))}
        </div>
      }
      {resources &&
        <div className="resource-list">
          <h3>Resources</h3>
          <ul>
            {resources.map(r => (
              <li key={r.href}>
                <a href={r.href} rel="noopener noreferrer" target="_blank">{r.label}</a>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default Slide;