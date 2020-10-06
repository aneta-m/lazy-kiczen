import React from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';

function Login() {
    return (
        <Page layout="centered" bgImg="small">
            <Header layout="centered" />
            <Main title="Log In" layout="centered">
                <input type="email" class="input input--has-border" placeholder="Email address..." />
                <div class="form__group">
                    <input type="password" class="input input--has-border " placeholder="Password" />
                    <small class="form__small-text form__small-text--left"><a href="account_recovery.html">Forgot password?</a></small>
                </div>
                <input type="submit" class="btn btn--bg-primary" />
                <small class="form__small-text">Don't have an account? <a href="register.html">Sign up</a></small>
            </Main>

        </Page>

    );
}

export default Login;