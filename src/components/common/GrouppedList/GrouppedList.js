import React from 'react';
import List from '../List/List';

const GrouppedList = ({ type, list, definitions, itemsConvertType, gaps }) => {

    const { title, groupId, itemsList } = definitions;
    let classNames = "v-list";

    if (type === "centered") {
        classNames += " v-list--centered";
    }

    if (type === "underlined") {
        classNames += " v-list--underlined";
    }

    const listContent = list.map(itemsGroup =>
        <li className="v-list__group" key={itemsGroup[groupId]}>
            <h4 className="hd-s hd--center text--capitalize">{itemsGroup[title]}</h4>
            <List
                type={type}
                gapsSize={gaps}
                listItems={itemsGroup[itemsList]}
                groupId={itemsGroup[groupId]}
                itemsConvertType={itemsConvertType ? itemsConvertType : false} >
            </List>
        </li>);


    return (
        <ul className={classNames}>
            {listContent}
        </ul>
    );
};

export default GrouppedList;
