import React, { useState } from 'react';

const Checkbox = ({ name, group, type }) => {
    const [value, setValue] = useState(false);
    function handleInputChange() {
        setValue(!value);
    }

    let classNames = "checkbox text--capitalize";
    if (type) {
        classNames += ` checkbox--type-${type}`;
    };
    return (
        <div className={classNames}>
            <input
                name={name}
                type="checkbox"
                checked={value}
                className="checkbox__input"
            />
            <label className="checkbox__label"
                onClick={handleInputChange}>{name}</label>
        </div>

    );
};

export default Checkbox;
