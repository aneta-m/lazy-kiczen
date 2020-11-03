import React from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import Aside from '../../layout/Aside/Aside';
import Slideshow from '../../common/Slideshow/Slideshow';
import Planner from '../../common/Planner/Planner';
import Cards from '../../common/Cards/Cards';



function Recipes() {
    return (
        <Page layout="basic">
            <Header layout="basic" hasSearch={true} />
            <Aside>
                <Slideshow>
                    <Planner />
                </Slideshow>
            </Aside>
            <Main
                layout="basic"
                hasSearch={false}
                title='Indeks przepisów'
                labels={true}
            >
                <Cards cardsList={[]} type="expanded" />
                <Cards cardsList={[]} type="expanded" />
                <Cards cardsList={[]} type="expanded" />

            </Main>
        </Page>
    );
}

export default Recipes;