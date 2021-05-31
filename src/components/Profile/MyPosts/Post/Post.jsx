import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
            <div className={s.item}>
                <img src= 'https://www.images.lesyadraw.ru/2014/07/kak_narisovat_aang_avatar0.jpg' />
                { props.message }
                <div className={s.like}>
                <span>like</span>
                    { props.like }
                </div>
            </div>
    )
}

export default Post;