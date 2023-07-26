import React, {useEffect, useState} from "react";
import {Fetch} from "../fetch/fetch";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

export const Post: React.FC = () => {

    const style = {
        background: "yellow",
        width: "500px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
    }

    const [content, setContent] = useState('')

    const params = useParams()

    useEffect(() => {
        (async () => {
           const data = await Fetch(`${params.postId}`, {method: "GET"})
            setContent(data.post.content)
        })()
    }, [])

    return (
        <div>
            <div style={style}>
                <div>{content}</div>
            </div>
            <NavLink to='/' style={{ display: "flex", justifyContent: "center",}}>Вернуться на главную</NavLink>
        </div>

    )
}