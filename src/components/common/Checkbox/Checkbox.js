import React, { useState } from 'react';

const Checkbox = ({ name, groupId, type, onChange, id, checked }) => {
    const [value, setValue] = useState(checked);

    function handleChange(e) {
        e.stopPropagation();
        if (onChange) {
            onChange({
                event: e,
                groupId,
                id,
                value: !value
            });
        }
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
                groupid={groupId}
                name={name}
                type="checkbox"
                checked={value}
                className="checkbox__input"
                onChange={handleChange}
            />
            <label className="checkbox__label" htmlFor={name}>{name} </label>
        </div>

    );
};

export default Checkbox;
