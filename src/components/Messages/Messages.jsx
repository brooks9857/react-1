import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    debugger;
    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/messages/1">Vasyan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/2">Petyan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/3">Chyato Tyan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/4">Ashotyan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/5">Boss-heusos</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/6">Baryga</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>Where is my dilda?</div>
                <div className={s.dialog}>Your have any slut-whore numbers??</div>
            </div>
        </div>
    )
}

export default Messages;