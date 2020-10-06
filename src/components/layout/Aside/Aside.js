import React from 'react';

const Aside = ({ children }) => {
    return (
        <aside className="aside page__aside">
            <div className="aside__item">
                <div className="aside__close">
                    <button className="btn btn--no-padding btn--text-grey"><i
                        className="fas fa-times"></i></button>
                </div>
                {children}
            </div>
        </aside>
    );
};

export default Aside;
