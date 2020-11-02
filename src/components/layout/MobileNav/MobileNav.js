import React from 'react';
import Collapsible from '../../common/Collapsible/Collapsible';
import Button from '../../common/Button/Button';


const MobileNav = () => {

    return (
        <nav className="nav header__nav">
            <ul className="nav__list">
                <li className="nav__item"> <Button href="recipes" contentAlign="left">Twoje
                                    przepisy</Button></li>
                <li className="nav__item"> <Button href="add_new" contentAlign="left">Dodaj
                                    przepis</Button></li>
                <li className="nav__item">
                    <Collapsible header="Twoje konto" isHeaderBtn>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Button href="profile.html" type="text-grey" contentAlign="left">Twój profil</Button>
                            </li>
                            <li className="nav__item">
                                <Button href="plans.html" type="text-grey" contentAlign="left">Twoje plany</Button>
                            </li>
                        </ul>
                    </Collapsible></li>
                <li className="nav__item"><Button href="login" contentAlign="left">Wyloguj</Button></li>
            </ul>
        </nav>
    );
};

export default MobileNav;
