import React, { useState } from 'react';

const Slideshow = ({ activeSlide, children }) => {

    // const [slides, setSlides] = useState(children);
    const [currentSlide, setCurrentSlide] = useState(activeSlide || 0);
    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide === 0) {
                return prevSlide;
            }
            return (prevSlide - 1);
        });
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide === (children.length - 1)) {
                return prevSlide;
            }
            return (prevSlide + 1);
        });
    };

    // Chciałam wygenerować kropki w paginacji, ale nie działało mapowanie :(
    const paginationContent = children.map((element, index) => <li className="slideshow__page-item" key={index}>
        <button className="slideshow__link" onClick={() => setCurrentSlide(index)}></button>
    </li>);
    console.log(currentSlide);
    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                <div className="slideshow__slide slideshow__slide--active">
                    {children}
                </div>
                <div className="slideshow__controller">
                    <button className="slideshow__btn" onClick={goToPrevSlide}><i className="fa fa-play slideshow__icon"></i></button>
                    <ul className="slideshow__pagination">
                        {paginationContent}
                    </ul>
                    <button className="slideshow__btn" onClick={goToNextSlide}><i className="fa fa-play slideshow__icon"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
