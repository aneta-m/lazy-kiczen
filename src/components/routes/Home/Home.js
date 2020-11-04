import React, { useState, Fragment } from 'react';
import Page from '../../layout/Page/Page';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import Aside from '../../layout/Aside/Aside';
import Modal from '../../common/Modal/Modal';
import Slideshow from '../../common/Slideshow/Slideshow';
import Planner from '../../common/Planner/Planner';
import Cards from '../../common/Cards/Cards';
import Button from '../../common/Button/Button';
import recipesList from '../../../data/recipesList.json';
import useWindowResize from '../../../hooks/useWindowResize';


//przy aktualizacji i załadowaniu recipesList do stanu daty w planned muszą być posortowane od najstarszych do najmłodszych
function Home() {

    const [isMobile, setIsMobile] = useState(false);
    const [isPlannerVisible, setIsPlannerVisible] = useState(false);

    const togglePlanner = () => {
        setIsPlannerVisible(!isPlannerVisible);
    };

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useWindowResize(updatePredicate);

    return (
        <Page layout="basic" >
            <Header layout="basic" hasSearch={false} isMobile={isMobile} />

            {(isMobile && isPlannerVisible) &&
                <Modal onClose={togglePlanner}>
                    <Slideshow>
                        <Planner />
                    </Slideshow>
                </Modal>
            }

            {(isMobile && !isPlannerVisible) &&
                <Button type="text-primary" position="fixed" size="xl" onClick={togglePlanner}><i className="fa fa-calendar"></i></Button>}

            {!isMobile &&
                <Aside>
                    <Slideshow activeSlide={2}>
                        <Planner number="1" />
                        <Planner number="2" />
                        <Planner number="3" />
                        <Planner number="4" />
                        <Planner number="5" />

                    </Slideshow>
                </Aside>}
            <Main
                layout="basic"
                hasSearch={true}
                title='Wybrane losowo dla Ciebie'
            >
                <Cards cardsList={recipesList} isExpandable={true} type="recipe" />
            </Main>
        </Page >
    );
};

export default Home;