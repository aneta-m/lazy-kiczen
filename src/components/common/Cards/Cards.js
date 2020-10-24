import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';




const Cards = ({ cardsList, type, title, isExpandable, layout }) => {
    let ComponentName = (type === "recipe") ? RecipeCard : "Card";

    const cardComponentsList = cardsList.map(item => (
        <li className="cards__item" key={item.id}>
            <ComponentName
                isExpandable={isExpandable}
                item={item}
            >
            </ComponentName>
        </li>
    ));

    return (
        <div className="cards">
            {title ? `<h3 class='cards__title'>${title}</h3>` : ""}
            <ul className="cards__list">
                {cardComponentsList}
                {/* <li className="cards__item">
                    <Card
                        isExpandable={true}
                        layout="basic"
                        type="listItem"
                        item={{
                            aside: "Ostatnio zaplanowany 2 tygodnie temu",
                            name: "Wołowinka w sosie grzybkowym",
                            labels: "Sniadania, desery, obiady, keto"
                        }}
                    >
                    </Card>
                </li>
                <li className="cards__item">
                    <Card
                        isExpandable={false}
                        layout="basic"
                        type="listItem"
                        item={{
                            aside: "Ostatnio zaplanowany 2 tygodnie temu",
                            name: "Wołowinka w sosie grzybkowym",
                            labels: "Śniadania, desery, obiady, keto"
                        }}
                    >
                    </Card>
                </li>
                <li className="cards__item">
                    <div className="card card--expanded">
                        <div className="card__aside">Ostatnio zaplanowane 2 tygodnie temu</div>
                        <div className="card__header">
                            <h2 className="card__title">Wołowinka polana sosem grzybkowym z kopytkami</h2>
                            <div className="card__subtitle">Śniadania, desery, keto, wegańskie</div>
                        </div>
                        <div className="card__buttons-list">
                            <a class="btn btn--text-secondary btn--style-bold btn--no-padding"><i
                                class="fas fa-plus btn__icon btn__icon--padding-right"></i>ZAPLANUJ</a>
                            <a class="btn btn--text-grey btn--style-bold btn--no-padding"><i
                                class="fas fa-pencil-alt btn__icon"></i>EDYTUJ</a>
                            <a class="btn btn--text-primary btn--style-bold btn--no-padding"><i
                                class="fas fa-arrow-right btn__icon"></i>URL</a>
                        </div>
                    </div>
                </li>
                <li className="cards__item">
                    <div className="card card--expanded">
                        <div className="card__aside">Ostatnio zaplanowane 2 tygodnie temu</div>
                        <div className="card__header">
                            <h2 className="card__title">Wołowinka polana sosem grzybkowym z kopytkami</h2>
                            <div className="card__subtitle">Śniadania, desery, keto, wegańskie</div>
                        </div>
                        <div className="card__buttons-list">
                            <a class="btn btn--text-secondary btn--style-bold btn--no-padding"><i
                                class="fas fa-plus btn__icon btn__icon--padding-right"></i>ZAPLANUJ</a>
                            <a class="btn btn--text-grey btn--style-bold btn--no-padding"><i
                                class="fas fa-pencil-alt btn__icon"></i>EDYTUJ</a>
                            <a class="btn btn--text-primary btn--style-bold btn--no-padding"><i
                                class="fas fa-arrow-right btn__icon"></i>URL</a>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
};

export default Cards;
