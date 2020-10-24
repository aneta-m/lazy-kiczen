import React, { Fragment } from 'react';
import Dropdown from '../../common/Dropdown/Dropdown';
import List from '../../common/List/List';
import Button from '../../common/Button/Button';


const Nav = () => {

    const dropdownBtn = { type: "white", padding: "md", leftIcon: "fas fa-user-alt", leftIconType: "accent", text: "Account" };

    return (
        <Fragment>
            <nav className="nav header__nav nav--mobile">
                <ul className="nav__list">
                    <li className="nav__item"> <a href="recipes" className="btn btn--align-left">Twoje
                                    przepisy</a></li>
                    <li className="nav__item"> <a href="add_new" className="btn btn--align-left">Dodaj
                                    przepis</a></li>
                    <li className="nav__item">
                        {/* <Dropdown type="mobileNav" /> */}
                    </li>
                    <li className="nav__item"><a href="login" className="btn btn--align-left">Wyloguj</a></li>
                </ul>
            </nav>
            <nav className="header__nav nav nav--desktop">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Button href="recipes" padding="md" leftIcon="fas fa-book" leftIconType="primary">Recipes</Button>
                    </li>
                    <li className="nav__item">
                        <Button href="add_new" padding="md" leftIcon="fas fa-plus" leftIconType="secondary">Add new</Button>
                    </li>
                    <li className="nav__item--dropdown nav__item--left-margin">
                        <Dropdown renderBtn={dropdownBtn}>
                            <List type="underlined"
                                listItems={
                                    [{ component: <a href="profile.html" className="btn btn--padding-sm">Twój profil</a>, id: 1 },
                                    { component: <a href="plans.html" className="btn btn--padding-sm">Twoje plany</a>, id: 2 },
                                    { component: <a href="login.html" className="btn btn--padding-sm">Wyloguj</a>, id: 3 }]}>
                            </List>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Nav;
