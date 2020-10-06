import React, { Fragment } from 'react';

const NavSimple = () => {
    return (
        <Fragment>
            <nav class="nav nav--layout-simple header__nav">
                <h2 class="nav__title hd-l">Welcome <br />to Lazy Kiczen!</h2>
                <ul class="nav__list">
                    <li class="nav__item"> <a href="./about" class="nav__link btn">About</a>
                    </li>
                    <li class="nav__item"> <a href="./register" class="nav__link btn">Sign
                                        up</a>
                    </li>
                    <li class="nav__item"> <a href="./login"
                        class="nav__link nav__link--emphasized btn btn--bg-primary">Log
                                        in</a>
                    </li>
                </ul>
            </nav>

            <nav class="nav nav--desktop header__nav">
                <ul class="nav__list">
                    <li class="nav__item"> <a href="./about" class="nav__link btn">About</a>
                    </li>
                    <li class="nav__item"> <a href="./register" class="nav__link btn">Sign
                                        up</a>
                    </li>
                    <li class="nav__item"> <a href="./login"
                        class="nav__link nav__link--emphasized btn btn--bg-primary">Log
                                        in</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavSimple;
