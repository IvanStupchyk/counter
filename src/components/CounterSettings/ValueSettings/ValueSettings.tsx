import React, {ChangeEvent} from "react";
import s from "./ValueSettings.module.css"

type ValueSettingsPropsType = {
    intermediateMinValue: number
    intermediateMaxValue: number
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    inputMaxError: boolean
    inputMinError: boolean
    getStateValues: (state: boolean) => void
}

export const ValueSettings = (props: ValueSettingsPropsType) => {
    const classNameInputMax = `${s.input_value} ${props.inputMaxError ? s.incorrect_value : ''}`
    const classNameInputMin = `${s.input_value} ${props.inputMinError ? s.incorrect_value : ''}`

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.value)
        props.getStateValues(true)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.value)
        props.getStateValues(true)
    }

    return (
        <div className={s.value_container}>
            <div className={s.values_position}>
                <p>max value:</p>

                <input className={classNameInputMax} type={"number"}
                       onChange={changeMaxValue}
                       value={props.intermediateMaxValue}
                />
            </div>
            <div className={s.values_position}>
                <p>start value:</p>

                <input className={classNameInputMin} type={"number"}
                       onChange={changeMinValue}
                       value={props.intermediateMinValue}
                />
            </div>
        </div>
    )
}