import React from "react";
import s from "../Counter/Counter.module.css"
import {ValueSettings} from "./ValueSettings/ValueSettings";
import {BtnSet} from "./BtnSet/BtnSet";

type CounterSettingsPropsType = {
    intermediateMinValue: number
    intermediateMaxValue: number
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    setValues: () => void
    maxValue: number
    minValue: number
    inputMaxError: boolean
    inputMinError: boolean
    errorMessage: boolean
    getStateValues: (state: boolean) => void
    changeValue: boolean
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    return (
        <div className={s.counter_container}>
            <ValueSettings
                intermediateMinValue={props.intermediateMinValue}
                intermediateMaxValue={props.intermediateMaxValue}
                changeMaxValue={props.changeMaxValue}
                changeMinValue={props.changeMinValue}
                inputMaxError={props.inputMaxError}
                inputMinError={props.inputMinError}
                getStateValues={props.getStateValues}
            />

            <BtnSet
                setValues={props.setValues}
                intermediateMinValue={props.intermediateMinValue}
                intermediateMaxValue={props.intermediateMaxValue}
                maxValue={props.maxValue}
                minValue={props.minValue}
                errorMessage={props.errorMessage}
                changeValue={props.changeValue}
            />
        </div>
    )
}