import React from "react";
import s from "./Scoreboard.module.css";

type ScoreboardPropsType = {
    counter: number
    maxValue: number
    minValue: number
    intermediateMinValue: number
    intermediateMaxValue: number
    inputMaxError: boolean
    inputMinError: boolean
    changeValue: boolean
}

export const Scoreboard = (props: ScoreboardPropsType) => {
    const errorMessage = (props.inputMinError || props.inputMaxError) && 'Incorrect value'

    return (
        <div className={s.scoreboard_container}>
            <span className={`${s.amount} ${props.counter === props.maxValue ? s.limit : ""}`}>
                {!props.changeValue && props.counter}
            </span>
            <p className={`${s.message_set_value} ${errorMessage && s.limit}`}> {errorMessage || props.changeValue && 'Enter values and press \'set\''}</p>
        </div>
    )
}
