import React from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import Aside from '../../layout/Aside/Aside';
import Slider from '../../common/Slider/Slider';
import Planner from '../../common/Planner/Planner';
import Cards from '../../common/Cards/Cards';
import recipesList from '../../../data/recipesList.json';
import categories from '../../../data/categories.json';
import { getLastPlannedTimeDescription } from '../../utilities/time';


//przy aktualizacji i załadowaniu recipesList do stanu daty w planned muszą być posortowane od najstarszych do najmłodszych

const recipeListMapped = recipesList.map(item => {

    if (!item.planned || !item.planned.length) {
        item.asideText = "";
        return item;
    }
    const lastPlannedDescription = getLastPlannedTimeDescription(item.planned[item.planned.length - 1]);
    if (!lastPlannedDescription) {
        item.asideText = "";
        return item;
    }
    item.asideText = lastPlannedDescription;
    return item;
});

function Home() {
    return (
        <Page layout="basic">
            <Header layout="basic" hasSearch={false} />
            <Aside>
                <Slider>
                    <Planner />
                </Slider>
            </Aside>
            <Main
                layout="basic"
                hasSearch={true}
                title='Wybrane losowo dla Ciebie'
            >
                <Cards cardsList={recipeListMapped} isExpandable={true} type="listItem" />
            </Main>
        </Page>
    );
}

export default Home;