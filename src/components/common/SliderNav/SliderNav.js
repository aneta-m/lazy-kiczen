import React from 'react';

const SliderNav = () => {
    return (
        <div className="slider-nav">
            <button className="slider-nav__btn"><i className="fa fa-play slider-nav__icon"></i></button>
            <ul className="slider-nav__pagination">
                <li className="slider-nav__page-item">
                    <button className="slider-nav__link"></button>
                </li>
                <li className="slider-nav__page-item">
                    <button className="slider-nav__link"></button>
                </li>
                <li className="slider-nav__page-item">
                    <button className="slider-nav__link slider-nav__link--secondary"></button>
                </li>
                <li className="slider-nav__page-item">
                    <button className="slider-nav__link"></button>
                </li>
                <li className="slider-nav__page-item">
                    <button className="slider-nav__link"></button>
                </li>
            </ul>
            <button className="slider-nav__btn"><i className="fa fa-play slider-nav__icon"></i></button>
        </div>
    );
};

export default SliderNav;


