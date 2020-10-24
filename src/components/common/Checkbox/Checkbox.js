import React, { useState } from 'react';

const Checkbox = ({ name, group, type }) => {
    const [value, setValue] = useState(false);

    function handleInputChange(e) {
        e.stopPropagation();
        setValue(!value);
    }

    let classNames = "checkbox text--capitalize";
    if (type) {
        classNames += ` checkbox--type-${type}`;
    };
    return (
        <div className={classNames}>
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={value}
                className="checkbox__input"
                onChange={handleInputChange}
            />
            <label className="checkbox__label" htmlFor={name}>{name} </label>
        </div>

    );
};

export default Checkbox;
