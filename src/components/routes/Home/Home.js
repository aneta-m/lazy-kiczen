import React, { useState } from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import Aside from '../../layout/Aside/Aside';
import Slider from '../../common/Slider/Slider';
import Planner from '../../common/Planner/Planner';
import Cards from '../../common/Cards/Cards';
import Button from '../../common/Button/Button';
import recipesList from '../../../data/recipesList.json';
import useWindowResize from '../../../hooks/useWindowResize';
import { getLastPlannedTimeDescription } from '../../utilities/time';


//przy aktualizacji i załadowaniu recipesList do stanu daty w planned muszą być posortowane od najstarszych do najmłodszych
function Home() {

    const toggleAside = (prevState) => setMobileAsideHandlerProps((prevState) => {
        return {
            ...prevState,
            isAsideVisible: !prevState.isAsideVisible
        };
    });

    const [mobileAsideHandlerProps, setMobileAsideHandlerProps] = useState({
        isMobile: true,
        isAsideVisible: true,
        onClick: toggleAside
    });

    const updatePredicate = () => {
        setMobileAsideHandlerProps((prevState) => {
            return {
                ...prevState,
                isMobile: (window.innerWidth < 1024)
            };
        });
    };
    useWindowResize(updatePredicate);



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

    return (
        <Page layout="basic">
            <Header layout="basic" hasSearch={false} />
            <Aside {...mobileAsideHandlerProps}>
                <Slider>
                    <Planner />
                </Slider>
            </Aside>
            <Main
                layout="basic"
                hasSearch={true}
                title='Wybrane losowo dla Ciebie'
            >
                <Cards cardsList={recipeListMapped} isExpandable={true} type="recipe" />
                {mobileAsideHandlerProps.isMobile && !mobileAsideHandlerProps.isAsideVisible ? <Button className="main__btn" onClick={toggleAside}>Guzik</Button> : ""}
            </Main>
        </Page>
    );
};

export default Home;