import React from "react";
import s from "../../Counter/Buttons/Buttons.module.css";
import {Btn} from "../../Counter/Buttons/Btn/Btn";

export type ButtonsPropsType = {
    setValues: () => void
    intermediateMinValue: number
    intermediateMaxValue: number
    maxValue: number
    minValue: number
    errorMessage: boolean
    changeValue: boolean
}

export const BtnSet = (props: ButtonsPropsType) => {
    return (
        <div className={s.btn_container}>
            <Btn
                btn={"set"}
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