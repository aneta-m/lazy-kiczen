import React from 'react';

const List = ({ type, listItems, gaps }) => {
    let classNames = "v-list";

    if (type === "centered") {
        classNames += " v-list--centered";
    }

    if (type === "underlined") {
        classNames += " v-list--underlined";
    };

    if (gaps) {
        classNames += ` v-list--gaps-${gaps}`;
    }

    const listContent = listItems.map((item) => <li className="v-list__item" key={item.id}>{item.component}</li>);

    return (
        <ul className={classNames}>
            {listContent}
        </ul>
    );
};

export default List;
