import React from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';

function LandingPage() {
    return (
        <Page layout="simple" bgImg='normal'>
            <Header layout="simple" hasSearch={false} />

            <Main
                layout="simple"
                title='Nie chce mnie się gotować'
            >
                Zrobię schabowe z brukselki i soczewicy, posypię
                tofu. Makaron gryczany podam ze skórkami ziemniaków.
                A na deser tostowane skórki z razowego chlepka.
            </Main>

        </Page>
    );
}

export default LandingPage;