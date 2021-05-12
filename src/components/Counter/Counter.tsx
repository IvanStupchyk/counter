import React from "react";
import s from "./Counter.module.css"
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Btn} from "./Btn/Btn";

export const Counter = React.memo(() => {
    return (
        <div className={s.counter_container}>
            <Scoreboard/>

            <div className={s.btn_container}>
                <Btn btn={"inc"}/>
                <Btn btn={"reset"}/>
            </div>
        </div>
    )
})