import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";

const Modal = ({ onClose, title, children }) => {

    const styleOnEnter = { "opacity": "1" };
    const styleOnExit = { "opacity": "0" };

    const [transitionTargetStyle, setTransitionTargetStyle] = useState(styleOnExit);
    const [pageYOffset] = useState(window.pageYOffset);

    const handleClick = (e) => {
        setTimeout(() => onClose(), 250);
        e.stopPropagation();
        setTransitionTargetStyle(styleOnExit);
        enableBodyScroll();
    };

    useEffect(() => {
        setTransitionTargetStyle(styleOnEnter);
        preventBodyScroll();
    }, []);

    const preventBodyScroll = () =>
        document.body.setAttribute('style', `position: fixed; top: -${pageYOffset}px; left: 0; right: 0;`);

    const enableBodyScroll = () => {
        document.body.setAttribute('style', '');
        window.scrollTo(0, pageYOffset);
    };

    return (
        <div className="modal page__modal" style={transitionTargetStyle} onClick={handleClick}>
            {title && <h3 className="modal__heading">{title}</h3>}
            <div className="modal__content">
                {onClose && <Button type="text-grey" className="modal__close" padding="md"><i
                    className="fas fa-times" onClick={handleClick} ></i></Button>}
                {children}
            </div>
        </div>
    );
};

export default Modal;
