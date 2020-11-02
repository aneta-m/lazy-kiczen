import React from 'react';

const Aside = ({ children }) => {

    return <aside className="aside page__aside">
        <div className="aside__item">
            {children}
        </div>
    </aside>;

};

export default Aside;
