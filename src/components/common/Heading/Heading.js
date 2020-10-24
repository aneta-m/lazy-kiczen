import React from 'react';

const Heading = ({ size, color, padding, weight, align, children }) => {

    let ComponentType;
    switch (size) {
        case "xl":
            ComponentType = "h1";
            break;
        case "l":
            ComponentType = "h2";
            break;
        case "m":
            ComponentType = "h3";
            break;
        case "s":
            ComponentType = "h4";
            break;
        default:
            ComponentType = "h5";
            break;
    }
    const classNames = `hd${weight ? " hd--weight-" + weight : ""}${color ? " hd--color-" + color : ""}${padding ? " hd--padding-" + padding : ""}${align ? " hd--align-" + align : ""}`;

    return <ComponentType className={classNames}>{children}</ComponentType>;

};

export default Heading;
