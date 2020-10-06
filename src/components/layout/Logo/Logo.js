import React from 'react';
import LogoImg from '../../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className="header__logo logo"><a href="/" className="logo__link"><img alt="logo" src={LogoImg}
            className="logo__img" /></a></div>
    );
};

export default Logo;
