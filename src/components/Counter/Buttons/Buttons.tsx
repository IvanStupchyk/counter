import React from "react";
import s from "./Buttons.module.css"
import {Btn} from "./Btn/Btn";

export type ButtonsPropsType = {
    increaseCounter: () => void
    resetCounter: () => void
    counter: number
    maxValue: number
    minValue: number
    intermediateMinValue: number
    intermediateMaxValue: number
    changeValue: boolean
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.btn_container}>
            <Btn increaseCounter={props.increaseCounter}
                 resetCounter={props.resetCounter}
                 counter={props.counter}
                 maxValue={props.maxValue}
                 minValue={props.minValue}
                 intermediateMinValue={props.intermediateMinValue}
                 intermediateMaxValue={props.intermediateMaxValue}
                 btn={"inc"}
                 changeValue={props.changeValue}
            />
            <Btn increaseCounter={props.increaseCounter}
                 resetCounter={props.resetCounter}
                 counter={props.counter}
                 maxValue={props.maxValue}
                 minValue={props.minValue}
                 intermediateMinValue={props.intermediateMinValue}
                 intermediateMaxValue={props.intermediateMaxValue}
                 btn={"reset"}
                 changeValue={props.changeValue}
            />
        </div>
    )
}