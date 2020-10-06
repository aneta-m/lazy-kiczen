import React, { useState } from 'react';
import Button from '../Button/Button';

const Collapsible = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.currentTarget.classList.toggle("collapsible--isOpen");
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className="collapsible" onClick={handleClick}>
            <Button leftIcon={isOpen ? "fas fa-arrow-up" : "fas fa-arrow-down"}></Button>

            <div className="collapsible__content">
                alskdjalskdj
                akjsdhaksdh
                kasjdkasjdhakds
                kajsdkadkhads
                asdajhskahdskasdkadskajkajds
            </div>
        </div>
    );
};

export default Collapsible;
