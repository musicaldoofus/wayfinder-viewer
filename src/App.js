import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import mockConfig from './helpers/mockConfig';
//import SlideViewer from './components/molecules/SlideViewer';
import GlobalControls from './components/molecules/GlobalControls';
import Slide from './components/molecules/Slide';
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

  const currentSlide = mockConfig.slides.filter(s => s.index === getCurrentIndex())[0].components;

  return (
    <div className="app">
      <div className="wayfinder-container">
        <div className="wayfinder-metadata">
          <h5>{mockConfig.metadata.title}</h5>
        </div>
        <div className="slide-viewer">
          <GlobalControls
              setIndexBack={setIndexBack}
              resetIndex={resetIndex}
          />
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
    </div>
  );
}

export default App;