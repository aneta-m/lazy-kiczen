import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import SearchForm from '../../common/SearchForm/SearchForm';
import Button from '../../common/Button/Button';
import MobileNav from '../../layout/MobileNav/MobileNav';

const MobileHeader = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleClick = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const openIcon = <i className="fas fa-bars btn__icon btn__icon--size-lg"></i>;
    const closeIcon = <i className="fas fa-times btn__icon btn__icon--size-lg"></i>;

    return (

        <header className={`header page__header ${isNavOpen && "header--active"}`}>
            <div className="header__inner">
                <Logo />
                <div className="header__nav-action">
                    <Button padding="none" onClick={handleClick}>{isNavOpen ? closeIcon : openIcon} </Button>
                </div>
                {isNavOpen ? <MobileNav /> : ""}
                <div className="header__search">
                    <SearchForm />
                </div>

            </div>
        </header>
    );
};

export default MobileHeader;
