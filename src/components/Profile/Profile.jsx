import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
 return <div className={s.content}>
     <div>
         <img
             src='data:image/jpeg;base64,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'/>
     </div>
     <div>
         ava + description
     </div>
     <MyPosts />
     </div>
}

export default Profile;