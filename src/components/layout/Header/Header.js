import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavSimple from '../NavSimple/NavSimple';
import MobileHeader from '../MobileHeader/MobileHeader';
import DesktopNav from '../DesktopNav/DesktopNav';
import SearchForm from '../../common/SearchForm/SearchForm';
import Button from '../../common/Button/Button';

const Header = ({ layout, hasSearch, isMobile }) => {

    const hasSearchModifierClass = hasSearch ? "header--has-search" : "";

    if (layout === "simple") {
        return (
            <header className="header header--layout-simple page__header">
                <div className="header__inner">
                    <Logo />
                    <NavSimple />
                </div>
            </header>
        );
    }

    if (layout === "centered") {
        return (
            <header className="header page__header">
                <div className="header__inner">
                    <Logo />
                </div>
            </header>
        );
    }

    return (isMobile ?
        <MobileHeader />
        :
        <header className={`header ${hasSearchModifierClass} page__header`}>
            <div className="header__inner">
                <Logo />
                <DesktopNav />
            </div>
        </header>
    );
};

export default Header;
