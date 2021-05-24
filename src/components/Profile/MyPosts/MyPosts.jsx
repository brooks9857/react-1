import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
    <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message="Hello? what's new?" like={'15'} />
            <Post message="It's my first post" />
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
        </div>
        <div className={s.like}>
                <like message='15' />
                <like message='20' />
        </div>
    </div>
    )
}

export default MyPosts;