import React, { useState } from 'react';
import Button from '../Button/Button';

const Dropdown = ({ renderBtn, children }) => {
    const { type, text, padding, leftIcon, leftIconType } = renderBtn;
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(prevIsOpen => !prevIsOpen);
    };
    const closeDropdown = (e) => {
        isOpen && setIsOpen(false);
    };

    window.addEventListener("click", closeDropdown);

    return (
        <div className="dropdown" onClick={handleClick}>
            <Button type={type ? type : false} padding={padding ? padding : false} leftIcon={leftIcon ? leftIcon : false} leftIconType={leftIconType ? leftIconType : false} rightIcon={`fas fa-chevron-${isOpen ? "up" : "down"}`} rightIconSize="md" onClick={handleClick}>{text} </Button>
            {isOpen && <div className="dropdown__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>}
        </div>
    );
};
export default Dropdown;;
