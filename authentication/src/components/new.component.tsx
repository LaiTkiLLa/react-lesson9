import React from "react";
import {useParams} from "react-router";

export const New: React.FC = () => {
    const {id} = useParams()
    return (
        <div>
            <h3>Привет</h3>
            <div>
                Здесь должно быть описание новости {id}
            </div>
        </div>
    )
}