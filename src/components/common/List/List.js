import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const List = ({ type, listItems, groupId, gapsSize, itemsConvertType, eventHandler }) => {
    let classNames = "v-list";

    if (type === "centered") {
        classNames += " v-list--centered";
    }

    if (type === "underlined") {
        classNames += " v-list--underlined";
    };

    if (gapsSize) {
        classNames += ` v-list--gaps-${gapsSize}`;
    }
    return (
        <ul className={classNames}>
            {listItems.map((item) => <li className="v-list__item" key={item.id}>
                {(itemsConvertType === 'checkbox') ? (<Checkbox name={item.name} groupId={groupId} id={item.id} type="transparent" checked={item.checked} onChange={eventHandler} />) : (item.component)}
            </li>)}
        </ul>
    );
};

export default List;
