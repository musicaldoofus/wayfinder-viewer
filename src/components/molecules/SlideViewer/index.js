import React from 'react';
import GlobalControls from '../GlobalControls';
import Slide from '../Slide';
import './SlideViewer.css';

const SlideViewer = ({config, setIndexBack, resetIndex, updateIndex, getCurrentIndex}) => {
    const currentSlide = config.slides.filter(s => s.index === getCurrentIndex())[0].components;
    return (
        <div className="slide-viewer">
            <GlobalControls
                setIndexBack={setIndexBack}
                resetIndex={resetIndex}
            />
            <Slide
                onClick={updateIndex}
                {...currentSlide}
            />
        </div>
    );
}

export default SlideViewer;