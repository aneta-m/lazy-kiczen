import React from 'react';

const Planner = () => {
    return (
        <div className="planner">
            <h3 className="hd-m">Current week plan</h3>
            <ul className="planner__list">
                <li className="planner-item">
                    <h4 className="planner-item__title"> Monday</h4>
                    <div className=" planner-item__content">
                        <a href="show_item.html" className="btn btn--style-bold btn--no-padding">Tarta szpinakowa</a>
                        <button className="btn btn--text-primary btn--no-padding"><i
                            className="fas fa-times btn__icon"></i></button>
                    </div>
                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Tuesday</h4>
                    <div className="planner-item__content">
                        <button
                            className="btn btn--text-secondary btn--no-padding btn--full-width">Zaplanuj</button>
                        <button className="btn btn--text-secondary btn--no-padding"><i
                            className="fas fa-plus btn__icon"></i></button>
                    </div>
                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Wednesday</h4>
                    <div className="planner-item__content">
                        <a href="show_item.html" className="btn btn--style-bold btn--no-padding">Tarta szpinakowa</a>
                        <button className="btn btn--text-primary btn--no-padding"><i
                            className="fas fa-times btn__icon"></i></button>
                    </div>

                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Thursday</h4>
                    <div className="planner-item__content">
                        <button
                            className="btn btn--text-secondary btn--no-padding btn--full-width">Zaplanuj</button>
                        <button className="btn btn--text-secondary btn--no-padding"><i
                            className="fas fa-plus btn__icon"></i></button>
                    </div>
                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Friday</h4>
                    <div className="planner-item__content">
                        <a href="show_item.html" className="btn btn--style-bold btn--no-padding">Tarta szpinakowa</a>
                        <button className="btn btn--text-primary btn--no-padding"><i
                            className="fas fa-times btn__icon"></i></button>
                    </div>
                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Saturday</h4>
                    <div className="planner-item__content">
                        <button
                            className="btn btn--text-secondary btn--no-padding btn--full-width">Zaplanuj</button>
                        <button className="btn btn--text-secondary btn--no-padding"><i
                            className="fas fa-plus btn__icon"></i></button>
                    </div>
                </li>
                <li className="planner-item">
                    <h4 className="planner-item__title">Sunday</h4>
                    <div className="planner-item__content">
                        <a href="show_item.html" className="btn btn--style-bold btn--no-padding">Tarta szpinakowa</a>
                        <button className="btn btn--text-primary btn--no-padding"><i
                            className="fas fa-times btn__icon"></i></button>
                    </div>
                </li>
            </ul>
        </div>

    );
};

export default Planner;
