import React from 'react';

const Dropdown = ({ renderBtn, children }) => {

    return (
        <div className="dropdown dropdown--isOpen">
            {renderBtn}
            <div className="dropdown__content">
                {children}
            </div>
        </div>
    );
};
export default Dropdown;
