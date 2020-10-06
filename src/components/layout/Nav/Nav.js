import React, { Fragment } from 'react';
import Dropdown from '../../common/Dropdown/Dropdown';
import List from '../../common/List/List';
import Button from '../../common/Button/Button';


const Nav = () => {

    const dropdownBtn = <button className="btn btn--white btn--padding-tall"><i
        className="fas fa-user-alt  btn__icon btn__icon--accent"></i>Account<i className="fas fa-chevron-down btn__icon btn__icon--size-md"></i></button>;

    return (
        <Fragment>
            <nav className="nav header__nav nav--mobile">
                <ul className="nav__list">
                    <li className="nav__item"> <a href="recipes" className="btn btn--align-left">Twoje
                                    przepisy</a></li>
                    <li className="nav__item"> <a href="add_new" className="btn btn--align-left">Dodaj
                                    przepis</a></li>
                    <li className="nav__item">
                        <Dropdown type="mobileNav" />
                    </li>
                    <li className="nav__item"><a href="login" className="btn btn--align-left">Wyloguj</a></li>
                </ul>
            </nav>
            <nav className="header__nav nav nav--desktop">
                <ul className="nav__list">
                    <li className="nav__item">
                        {/* <a href="recipes" className="btn btn--padding-tall"><i
                        className="fas fa-book  btn__icon btn__icon--primary"></i>Recipes</a> */}
                        <Button href="recipes" padding="tall" leftIcon="fas fa-book" leftIconType="primary">Recipes</Button>

                    </li>
                    <li className="nav__item"> <a href="add_new" className="btn btn--padding-tall"><i
                        className="fas fa-plus btn__icon btn__icon--secondary"></i>Add new</a></li>
                    <li className="nav__item--dropdown nav__item--left-margin">
                        <Dropdown renderBtn={dropdownBtn}>
                            <List type="underlined"
                                listItems={
                                    [<a href="profile.html" className="btn btn--padding-sm">Twój profil</a>,
                                    <a href="plans.html" className="btn btn--padding-sm">Twoje plany</a>,
                                    <a href="login.html" className="btn btn--padding-sm">Wyloguj</a>]}>
                            </List>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Nav;
