import React from "react";
import s from "./Counter.module.css"
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Buttons} from "./Buttons/Buttons";

type CounterPropsType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
    maxValue: number
    minValue: number
    intermediateMinValue: number
    intermediateMaxValue: number
    inputMaxError: boolean
    inputMinError: boolean
    changeValue: boolean
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter_container}>
            <Scoreboard counter={props.counter}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        intermediateMinValue={props.intermediateMinValue}
                        intermediateMaxValue={props.intermediateMaxValue}
                        inputMaxError={props.inputMaxError}
                        inputMinError={props.inputMinError}
                        changeValue={props.changeValue}
            />
            <Buttons increaseCounter={props.increaseCounter}
                     resetCounter={props.resetCounter}
                     counter={props.counter}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     intermediateMinValue={props.intermediateMinValue}
                     intermediateMaxValue={props.intermediateMaxValue}
                     changeValue={props.changeValue}
            />
        </div>
    )
}