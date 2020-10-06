import React from 'react';
import SearchForm from '../../common/SearchForm/SearchForm';
import Labels from '../../common/Labels/Labels';
import categories from '../../../data/categories.json';

const Main = ({ layout, title, children, hasSearch, labels }) => {

    switch (layout) {
        case 'simple':
            return (
                <div className="main-content main-content--layout-simple page__main">
                    <div className="main-content__header">
                        <h1 className="hd-xl">
                            {title}
                        </h1>
                    </div>
                    <div className="main-content__text">
                        {children}
                    </div>
                </div>
            );

        case 'centered':
            return (
                <div className="main-content main-content--layout-centered page__main">
                    <form className="form  form--shadow-light main-content__form">
                        <h3 className="form__title hd-m">
                            {title}
                        </h3>
                        <div className="form__inner">
                            {children}
                        </div>
                    </form>
                </div>
            );
        default:
            return (
                <div className="main-content page__main ">
                    {hasSearch ? <SearchForm hasSelect={true} selectList={categories} /> : ""}
                    <div className={`main-content__header ${labels ? "main-content__header--has-labels" : ""}`}>
                        <h3 className="hd-m">{title}</h3>
                        <div className="main-content__labels">
                            {labels ? <Labels /> : ""}
                        </div>
                    </div>
                    {children}
                </div>
            );
    };
};
export default Main;
