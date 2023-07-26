import React, {useEffect, useState} from "react";
import {Fetch} from "../fetch/fetch";
import {Link, NavLink} from "react-router-dom";

type Post = {
    id: number,
    created: number
}

const styles = {
    border: "2px green solid",
    justifyContent: "center",
    background: "lightBlue",
    marginBottom: "10px",
    display: "flex",
}

export const Main: React.FC = () => {

    const [post, newPost] = useState<Post[]>()

    useEffect(() => {
        (async () => {
            const data = await Fetch('', {method: 'GET'})
            newPost(data)
        })()
    }, [])

    return (
        <div style={{margin: "0 auto", width: "1024px"}}>
            {post?.length
                ? <div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <NavLink to='/posts/new' style={{color: 'white', textDecoration: 'none'}}>
                            <div style={{display: 'flex', justifyContent: 'center', background: 'blue', width: '200px', }}>Новый пост</div>
                        </NavLink>
                    </div>
                    {post.map(item => (
                        <NavLink to={`/posts/${item.id}`} style={{textDecoration: 'none', color: 'black'}} key={item.id}>
                            <div style={styles}>
                                <div>Это пост номер {item.id}.</div>
                                <div>Он был создан {item.created}</div>
                            </div>
                        </NavLink>

                    ))}
                </div>
                : <div style={styles}>
                    <div>Сейчас нет ни одного поста, будь первым!</div>
                    <div>
                        <Link to="/posts/new" style={{textDecoration: "none", color: 'red'}}>Создать пост</Link>
                    </div>
                </div>
            }
        </div>
    )
}