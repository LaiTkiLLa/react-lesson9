import React from "react";
import {NavLink} from "react-router-dom";

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <NavLink to="/" className="menu__item">
                ГЛАВНАЯ
            </NavLink>
            <NavLink to="/drift" className="menu__item">
                ДРИФТ-ТАКСИ
            </NavLink>
            <NavLink to="/timeattack" className="menu__item">
                TIME ATTACK
            </NavLink>
            <NavLink to="/forza" className="menu__item">
                FORZA KARTING
            </NavLink>
        </div>
    )
}