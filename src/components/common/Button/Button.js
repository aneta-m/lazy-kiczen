import React from 'react';
import classnames from 'classnames';

const Button = ({ type, href, size, padding, text, contentAlign, leftIcon, rightIcon, leftIconType, rightIconType, leftIconSize, rightIconSize, leftIconPadding, rightIconPadding, handleClick, children, className }) => {

    let btnClasses = "btn";
    let leftIconElement = "";
    let rightIconElement = "";

    if (leftIcon) {
        let leftIconClasses = `${leftIcon} btn__icon`;
        leftIconType && (leftIconClasses += ` btn__icon--${leftIconType}`);
        leftIconPadding && (leftIconClasses += ` btn__icon--padding-${leftIconPadding}`);
        leftIconSize && (leftIconClasses += ` btn__icon--size-${leftIconSize}`);
        leftIconElement = <i className={leftIconClasses}></i>;
    }

    if (rightIcon) {
        let rightIconClasses = `${rightIcon} btn__icon`;
        rightIconType && (rightIconClasses += ` btn__icon--${rightIconType}`);
        rightIconPadding && (rightIconClasses += ` btn__icon--padding-${rightIconType}`);
        rightIconSize && (rightIconClasses += ` btn__icon--size-${rightIconType}`);
        rightIconElement = <i className={rightIconClasses}></i>;
    }

    type && (btnClasses += ` btn--${type}`);
    size && (btnClasses += ` btn--size-${size}`);
    padding && (btnClasses += ` btn--padding-${padding}`);
    text && (btnClasses += ` btn--text-${text}`);
    contentAlign && (btnClasses += ` btn--align-${contentAlign}`);
    (leftIcon && rightIcon) && (btnClasses += ` btn--has-2-icons`);
    className && (btnClasses += className);

    if (href) {
        return (
            <a href={href} className={btnClasses}>{leftIconElement} {children} {rightIconElement}</a>
        );
    }
    return (
        <button className={btnClasses} onClick={handleClick}>{leftIconElement} {children} {rightIconElement}</button>
    );
};
export default Button;