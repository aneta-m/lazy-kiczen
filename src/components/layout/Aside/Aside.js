import React, { useRef, useEffect } from 'react';
import Button from '../../common/Button/Button';

const Aside = ({ isMobile, isAsideVisible, onClick, children }) => {

    //zrobić warunkowe renderowanie buttona na podstawie viewport width,
    //dodać funkcję handleClick, ktora będzie zamykać aside?? czy jednak slider powinien to mieć

    const asideRef = useRef(null);

    useEffect(() => {
        if (asideRef.current) {
            asideRef.current.scrollIntoView();
        }
    });

    if (isMobile && isAsideVisible) {

        return <aside className="aside page__aside" ref={asideRef}>
            <div className="aside__item">
                <div className="aside__close">
                    <Button type="text-grey" padding="md"><i
                        className="fas fa-times" onClick={onClick} ></i></Button>
                </div>
                {children}
            </div>
        </aside >;
    }

    if (isMobile && !isAsideVisible) {
        return null;
    }

    if (!isMobile) {
        return <aside className="aside page__aside">
            <div className="aside__item">
                {children}
            </div>
        </aside>;
    }
};

export default Aside;
