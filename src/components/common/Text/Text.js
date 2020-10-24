import React from 'react';

const Text = ({ type, size, padding, color, as, children }) => {

    const ComponentType = as ? as : "div";
    const classNames = `text${type ? " text--" + type : ""}${size ? " text--size-" + size : ""}${padding ? " text--padding-" + padding : ""}${color ? " text--color-" + color : ""}`;

    return <ComponentType className={classNames}>{children}</ComponentType>;

};

export default Text;
