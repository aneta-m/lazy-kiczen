import React, { useState } from 'react';
import Button from '../Button/Button';
import Labels from '../Labels/Labels';

const Card = ({ isExpandable, hasEditableLabels, layout, type, item }) => {

    let classes = "card";
    layout === "simple" && (classes += " card--layout-simple");
    layout === "largeGaps" && (classes += " card--layout-large-gaps");
    isExpandable || (classes += " card--expanded");

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    if (isExpandable) {
        return (
            <div className={`${classes} ${isOpen ? "card--expanded" : ""}`} onClick={handleClick}>

                {item.aside ? <div className="card__aside">{item.aside}</div> : ""}
                <div className="card__header">
                    <h2 className="card__title">{item.name}</h2>
                    {hasEditableLabels || <div className="card__subtitle">{item.labels.join(", ")}</div>}
                </div>
                {hasEditableLabels && <Labels className="card__labels"></Labels>}
                <div className="card__action">
                    <Button type="text-primary" padding="md" leftIcon={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></Button>
                </div>

                {type === "category" &&
                    <div className="card__buttons-list">
                        <Button type="text-secondary" padding="none" text="bold" leftIcon="fas fa-plus" >DODAJ NOWĄ OPCJĘ</Button>
                        <Button type="text-primary" padding="none" text="bold" leftIcon="fas fa-times" >USUŃ KATEGORIĘ</Button>
                    </div>}
                {type === "listItem" &&
                    <div className="card__buttons-list">
                        <Button type="text-secondary" padding="none" text="bold" leftIcon="fas fa-plus" >ZAPLANUJ</Button>
                        <Button type="text-grey" padding="none" text="bold" leftIcon="fas fa-pencil-alt" >EDYTUJ</Button>
                        <Button type="text-primary" padding="none" text="bold" leftIcon="fas fa-arrow-right" >URL</Button>
                    </div>}
            </div>
        );
    } else {
        return (
            <div className={classes}>
                {item.aside && <div className="card__aside">{item.aside}</div>}
                <div className="card__header">
                    <h2 className="card__title">{item.name}</h2>
                    {hasEditableLabels || <div className="card__subtitle">{item.labels}</div>}
                </div>
                {hasEditableLabels &&
                    <div className="card__labels labels">
                        <ul className="labels__list">
                            <li className="labels__item labels__item--has-input btn btn--bg-white"><input
                                width="1" className="input labels__input" type="text"
                                value="Dieta wegańska" /><button href="index.html"
                                    className="btn__icon btn__icon--close btn__icon--primary">+</button>
                            </li>
                            <li className="labels__item labels__item--has-input btn btn--bg-white"><input
                                width="1" className="input labels__input" type="text"
                                value="Dieta wegańska" /><button href="index.html"
                                    className="btn__icon btn__icon--close btn__icon--primary">+</button>
                            </li>
                            <li className="labels__item labels__item--has-input btn btn--bg-white"><input
                                width="1" className="input labels__input" type="text"
                                value="Dieta wegańska" /><button href="index.html"
                                    className="btn__icon btn__icon--close btn__icon--primary">+</button>
                            </li>
                        </ul>
                    </div>}
                {type === "category" &&
                    <div className="card__buttons-list">
                        <Button type="text-secondary" padding="none" text="bold" leftIcon="fas fa-plus">DODAJ NOWĄ OPCJĘ</Button>
                        <Button type="text-primary" padding="none" text="bold" leftIcon="fas fa-times">USUŃ KATEGORIĘ</Button>
                    </div>}
                {type === "listItem" &&
                    <div className="card__buttons-list">
                        <Button type="text-secondary" padding="none" text="bold" leftIcon="fas fa-plus">ZAPLANUJ</Button>
                        <Button type="text-grey" padding="none" text="bold" leftIcon="fas fa-pencil-alt">EDYTUJ</Button>
                        <Button type="text-primary" padding="none" text="bold" leftIcon="fas fa-arrow-right">URL</Button>
                    </div>}
            </div>
        );
    }
};

export default Card;
