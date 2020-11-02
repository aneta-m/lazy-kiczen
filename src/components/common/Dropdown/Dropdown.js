import React, { useState } from 'react';
import Button from '../Button/Button';

//zrobić żeby dropdown miał transition effect na opacity - może jednak wspólny komponent od tego?

const Dropdown = ({ renderBtn, children }) => {

    const { type, text, padding, leftIcon, leftIconType } = renderBtn;

    const styleOnEnter = { "opacity": "1" };
    const styleOnExit = { "opacity": "0" };

    const [isOpen, setIsOpen] = useState(false);
    const [transitionTargetStyle, setTransitionTargetStyle] = useState(styleOnExit);
    const [chevronIcon, setChevronIcon] = useState("down");

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isOpen) {
            closeDropdown();
        }
        if (!isOpen) {
            openDropdown();
        }
    };

    const closeDropdown = () => {
        window.removeEventListener("click", closeDropdown);
        setChevronIcon("down");
        setTimeout(() => setIsOpen(false), 250);
        setTransitionTargetStyle(styleOnExit);
    };

    const openDropdown = () => {
        window.addEventListener("click", closeDropdown);
        setChevronIcon("up");
        setIsOpen(true);
        setTimeout(() => setTransitionTargetStyle(styleOnEnter), 5);
    };

    return (
        <div className="dropdown" onClick={handleClick}>
            <Button type={type ? type : false} padding={padding ? padding : false} leftIcon={leftIcon ? leftIcon : false} leftIconType={leftIconType ? leftIconType : false} rightIcon={`fas fa-chevron-${chevronIcon}`} rightIconSize="md" onClick={handleClick}>{text} </Button>
            {isOpen && <div className="dropdown__content" style={transitionTargetStyle} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>}
        </div>
    );
};
export default Dropdown;
