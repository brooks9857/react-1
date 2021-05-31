import React from "react";
import s from './Messages.module.css';

const Messages = (props) => {
    debugger;
    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Vasyan
                </div>
                <div className={s.dialog}>
                    Petyan
                </div>
                <div className={s.dialog}>
                    Chyato Tyan
                </div>
                <div className={s.dialog}>
                    Ashotyan
                </div>
                <div className={s.dialog}>
                    Boss heusos
                </div>
                <div className={s.dialog}>
                    Baryga
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