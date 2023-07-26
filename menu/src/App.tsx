import React from 'react';
import './App.css';
import {Menu} from "./component/menu.component";
import {Route, Routes} from "react-router";
import {HomePage} from "./component/home.component";
import {DriftPage} from "./component/drift.component";
import {TimeAttack} from "./component/time-attack.component";
import {Forza} from "./component/forza.component";

export default function App() {
    return (
        <div>
            <Menu />
            <div className="page">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/drift" element={<DriftPage/>}/>
                    <Route path="/timeattack" element={<TimeAttack/>}/>
                    <Route path="/forza" element={<Forza/>}/>
                </Routes>
            </div>
        </div>
    )
}
