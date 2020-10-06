import React from 'react';

const Labels = () => {
    return (
        <div className="labels">
            <ul className="labels__list">
                <li className="labels__item">
                    <button className="btn btn--flex btn--white"><span className="btn__text">Desery</span><i
                        className="btn__icon btn__icon--size-sm btn__icon--padding-left btn--text-grey fas fa-times"></i></button>
                </li>
                <li className="labels__item">
                    <button className="btn btn--flex btn--white"><span className="btn__text">Wegańskie</span><i
                        className="btn__icon btn__icon--size-sm btn__icon--padding-left btn--text-grey fas fa-times"></i></button>
                </li>
                <li className="labels__item">
                    <button className="btn btn--flex btn--white"><span className="btn__text">Keto</span><i
                        className="btn__icon btn__icon--size-sm btn__icon--padding-left btn--text-grey fas fa-times"></i></button>
                </li>
            </ul >
        </div >
    );
};

export default Labels;
