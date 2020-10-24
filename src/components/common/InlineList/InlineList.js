import React from 'react';

const InlineList = ({ hasSeparators, children }) => {
    let classNames = "inline-list";
    (hasSeparators) && (classNames += " inline-list--has-separators");
    return (
        <ul className={classNames}>
            {children.map(element => <li className="inline-list__item" key={element.props.id}>{element}</li>)}
        </ul>
    );
};

export default InlineList;
