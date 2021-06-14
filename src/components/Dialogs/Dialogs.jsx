import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path="/dialogs/" + props.id;

    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
   return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>

                <DialogsItem name='Vasyan' id='1' />
                <DialogsItem name='Petyan' id='2' />
                <DialogsItem name='Chyato Tyan' id='3' />
                <DialogsItem name='Ashotyan' id='4' />
                <DialogsItem name='Boss-heusos' id='5' />
                <DialogsItem name='Baryga' id='6' />
            </div>
            <div className={s.message}>
                <Message message='Hi'/>
                <Message message='Where is my CASH?'/>
                <Message message='U have a one day to give me all my money'/>
            </div>
        </div>
    )
}

export default Dialogs;