import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Controls from '../../molecules/Controls';
import Slide from '../../molecules/Slide';
import './Player.css';

const Player = ({config}) => {
  const [indexHistory, setIndexHistory] = useState([0]);

  const updateIndex = (toIndex) => {
    setIndexHistory(indexHistory.concat(toIndex));
  }

  const resetIndex = () => {
    setIndexHistory([0]);
  }

  const setIndexBack = () => {
    const targetIndex = indexHistory.length > 2 ? indexHistory.length - 1 : 1;
    setIndexHistory(indexHistory.slice(0, targetIndex));
  }

  const getCurrentIndex = () => {
    return indexHistory[indexHistory.length - 1];
  }

  const transitions = useTransition(getCurrentIndex(), null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opactiy: 0}
  });

  const currentSlide = config.slides.filter(s => s.index === getCurrentIndex())[0].components;

  const controls = { setIndexBack, resetIndex };
  return (
    <div className="player">
      <div className="player-metadata-controls">
        <Controls
          {...controls}
        />
        <div className="player-title">
          <h5>{config.metadata.title}</h5>
        </div>
      </div>
      <div className="slide-viewer">
        {transitions.map(({item, props}) => (
          <animated.div style={props}>
            <Slide
              onClick={updateIndex}
              {...currentSlide}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Player;