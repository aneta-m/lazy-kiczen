import React from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';

function Register() {
    return (
        <Page layout="centered" bgImg="small">
            <Header layout="centered" />
            <Main title="Log In" layout="centered">
                <input type="email" class="input input--has-border" placeholder="Email address..." />
                <input type="password" class="input input--has-border " placeholder="Password" />
                <input type="password" class="input input--has-border " placeholder="Confirm password" />
                <input type="submit" class="btn btn--bg-primary" />
                <small class="form__small-text">Already have an account? <a href="login.html">Log in</a></small>
            </Main>

        </Page>
    );

}

export default Register;