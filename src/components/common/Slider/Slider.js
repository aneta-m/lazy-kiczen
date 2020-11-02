import React, { useState } from 'react';
import SliderNav from '../SliderNav/SliderNav';

const Slider = ({ children }) => {
    // ile slajdów
    // który slajd active



    return (
        <div className="slider">
            <div className="slider__inner">
                <div className="slider__slide slider__slide--active">
                    {children}
                </div>
                <SliderNav />
            </div>
        </div>
    );
};

export default Slider;
