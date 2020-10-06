import React from 'react';
import List from '../List/List';

const GrouppedList = ({ type, list, definitions, gaps }) => {

    let classNames = "v-list";

    if (type === "centered") {
        classNames += " v-list--centered";
    }

    if (type === "underlined") {
        classNames += " v-list--underlined";
    }

    const listContent = list.map(categoryGroup =>
        <div className="v-list__group">
            <h4 className="hd-s hd--center text--capitalize">{categoryGroup[definitions.title]}</h4>
            <List type={type} listItems={categoryGroup[definitions.itemsList]} gaps={gaps}></List>
        </div>);


    return (
        <ul className={classNames}>
            {listContent}
        </ul>
    );
};

export default GrouppedList;
