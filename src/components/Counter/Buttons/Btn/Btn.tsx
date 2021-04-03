import React from "react";
import s from "./Buttons.module.css"

type ButtonsPropsType = {
    increaseCounter: () => void
    resetCounter: () => void
    counter: number
}

export const Buttons = (props: ButtonsPropsType) => {
    const increaseCounter = () => {
        props.increaseCounter()
    }

    const resetCounter = () => {
        props.resetCounter()
    }

    return (
        <div className={s.btn_container}>
            <button className={s.btn} disabled={props.counter === 5} onClick={increaseCounter}>inc</button>
            <button className={s.btn} disabled={!props.counter} onClick={resetCounter}>reset</button>
        </div>
    )
}