import React from 'react';
import Footer from '../Footer/Footer';


const Page = ({ layout, bgImg, children }) => {

    let bgImgClass;
    const layoutModifier = (layout && layout !== 'basic') ? layout : false;
    const layoutClassModifier = layoutModifier ? `page--layout-${layoutModifier}` : '';

    switch (bgImg) {
        case 'normal':
            bgImgClass = 'bg-img';
            break;
        case 'small':
            bgImgClass = 'bg-img bg-img--small';
            break;
        default:
            bgImgClass = '';
    }

    return (
        <div className={`page ${layoutClassModifier} bg ${bgImgClass}`}>
            <div className="page__inner">
                {layoutModifier === 'centered' ?
                    children
                    :
                    <div className="page__grid">
                        {children}
                    </div>}
                <Footer />
            </div>
        </div>
    );
};

export default Page;