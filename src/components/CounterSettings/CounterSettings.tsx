import React from "react";
import s from "../Counter/Counter.module.css"
import {ValueSettings} from "./ValueSettings/ValueSettings";
import {Btn} from "../Counter/Btn/Btn";


export const CounterSettings = React.memo( () => {
    return (
        <div className={s.counter_container}>
            <ValueSettings/>

            <div className={s.btn_container}>
                <Btn btn={"set"}/>
            </div>
        </div>
    )
})