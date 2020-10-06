import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';


const PageGrid = (props) => {
    return (
        <div className="page__grid">
            <Header layout={props.layout} />
            <Main layout={props.layout} />
        </div>
    );
};

export default PageGrid;
