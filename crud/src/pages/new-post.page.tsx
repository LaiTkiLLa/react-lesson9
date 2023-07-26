import React, {useState} from "react";
import {Fetch} from "../fetch/fetch";

export const NewPost: React.FC = () => {

    const [content, setContent] = useState<string>('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const {value} = e.target
        setContent(value)
    }

    const handlePost = async (e: any) => {
        e.preventDefault()
        return Fetch('', {method: "POST", body: JSON.stringify({id: Date.now(), content})})
    }

    return (
        <form>
            <input type="text" value={content} onChange={handleChange}/>
            <button type='submit' onClick={handlePost}>опубликовать</button>
        </form>
    )
}