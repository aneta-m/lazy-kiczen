import React from 'react';
import Logo from '../Logo/Logo';
import NavSimple from '../NavSimple/NavSimple';
import Nav from '../Nav/Nav';
import SearchForm from '../../common/SearchForm/SearchForm';

const Header = ({ layout, hasSearch }) => {
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

    return (
        <header className={`header ${hasSearchModifierClass} header--actve page__header`}>
            <div className="header__inner">
                <Logo />
                <div className="header__nav-action">
                    <button className="btn btn--no-padding"><i className="fas fa-bars btn__icon btn__icon--size-lg"></i></button>
                </div>
                <div className="header__search">
                    <SearchForm />
                </div>
                <Nav />
            </div>
        </header>
    );

};

export default Header;
