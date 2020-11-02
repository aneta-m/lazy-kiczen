import React, { useState, useRef, useEffect } from 'react';
import Button from '../Button/Button';

const Collapsible = ({ topContent, header, children, isHeaderBtn }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [topContentHeight, setTopContentHeight] = useState(0);
    const [mainContentHeight, setMainContentHeight] = useState(0);


    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const topContentElement = useRef(null);
    const mainContentElement = useRef(null);

    useEffect(() => {
        setMainContentHeight(mainContentElement.current.clientHeight);
        topContentElement.current && setTopContentHeight(topContentElement.current.clientHeight);
    });

    return (
        <div className={`collapsible ${isOpen ? "collapsible--isOpen" : ""}`} onClick={handleClick}>
            <Button leftIcon={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"} className="collapsible__btn" onClick={handleClick}></Button>
            {topContent ?
                <div className="collapsible__top-content" style={isOpen ? { height: topContentHeight } : { height: "0" }}>
                    <div className="collapsible__top-content-inner" ref={topContentElement}>
                        {topContent}
                    </div>
                </div>
                :
                ""}
            {isHeaderBtn ? <Button rightIcon={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"} rightIconType="primary" onClick={handleClick}>{header}</Button> : header}
            < div className="collapsible__main-content" style={isOpen ? { height: mainContentHeight } : { height: "0" }} >
                <div className="collapsible__main-content-inner" ref={mainContentElement}>
                    {children}
                </div>
            </div>
        </div >
    );
};

export default Collapsible;
