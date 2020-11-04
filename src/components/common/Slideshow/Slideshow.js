import React, { useState } from 'react';

const Slideshow = ({ activeSlide, children, infiniteLoop }) => {

    const [currentSlide, setCurrentSlide] = useState(activeSlide || 0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [styleOnEnter, setStyleOnEnter] = useState({});
    const [styleOnExit, setStyleOnExit] = useState({});

    // infiniteLoop = true;

    const jumpToSlide = (index) => {
        (currentSlide < index) && goToRightSlide(index);
        (currentSlide > index) && goToLeftSlide(index);
    };

    const goToLeftSlide = (index = false) => {
        if (currentSlide === 0) {
            if (!infiniteLoop) return;
            index = children.length - 1;
        }
        setSlideIndexes("left", index);
        setStyleSequence("left");
    };

    const goToRightSlide = (index = false) => {
        if (currentSlide === (children.length - 1)) {
            if (!infiniteLoop) return;
            index = 0;
        };
        setSlideIndexes("right", index);
        setStyleSequence("right");
    };

    function setSlideIndexes(direction, index) {
        const prevSlide = currentSlide;
        setPrevSlide(prevSlide);
        setTimeout(() => {
            setPrevSlide(null);
        }, 500);
        if (index !== false) {
            setCurrentSlide(index);
            return;
        }
        setCurrentSlide(direction === "left" ? prevSlide - 1 : prevSlide + 1);
    }

    function setStyleSequence(direction) {
        setStyleOnEnter({ transform: `translateX(${direction === "left" ? "-100%" : "100%"})` });
        setTimeout(() => {
            setStyleOnEnter({ transition: "0.5s" });
            setStyleOnExit({ left: direction === "left" ? "100%" : "-100%" });
        });
        setTimeout(() => {
            setStyleOnExit({});
        }, 500);
    }

    const paginationContent = children.map((element, index) => <li className="slideshow__page-item" key={index}>
        <button className={`slideshow__link ${(index === currentSlide) ? "slideshow__link--active" : ""}`} onClick={() => jumpToSlide(index)}></button>
    </li>);

    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                {prevSlide || prevSlide === 0 ? <div className="slideshow__slide slideshow__slide--prev slideshow__slide--on-transition" style={styleOnExit ? styleOnExit : {}}>
                    {children[prevSlide]}
                </div> : ""}
                <div className="slideshow__slide slideshow__slide--active" style={styleOnEnter}>
                    {children[currentSlide]}
                </div>
                <div className="slideshow__controller">
                    <button className="slideshow__btn" onClick={() => goToLeftSlide()}><i className="fa fa-play slideshow__icon"></i></button>
                    <ul className="slideshow__pagination">
                        {paginationContent}
                    </ul>
                    <button className="slideshow__btn" onClick={() => goToRightSlide()}><i className="fa fa-play slideshow__icon"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
