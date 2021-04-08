import React from "react";
import s from "./Btn.module.css"


type BtnPropsType = {
    increaseCounter?: () => void
    resetCounter?: () => void
    counter?: number
    btn: "inc" | "reset" | "set"
    maxValue: number
    minValue: number
    setValues?: () => void
    intermediateMinValue: number
    intermediateMaxValue: number
    errorMessage?: boolean
    changeValue: boolean
}

export const Btn = (props: BtnPropsType) => {
    const disabledSet = props.btn === "set" && !props.changeValue
    const disabledIncReset = props.btn !== "set" && props.changeValue
    const disabledInc = props.btn === "inc" && props.counter === props.maxValue
    const disabledBtns = disabledSet || props.errorMessage || disabledIncReset || disabledInc

    const increaseCounter = () => {
        props.increaseCounter && props.increaseCounter()
    }

    const resetCounter = () => {
        props.resetCounter && props.resetCounter()
    }

    const setValues = () => {
        props.setValues && props.setValues()

        localStorage.setItem('Counter Values',
            JSON.stringify({
                minValue: props.intermediateMinValue,
                maxValue: props.intermediateMaxValue
            }))
    }

    const kindBtn = () => {
        switch (props.btn) {
            case "inc":
                increaseCounter()
                break
            case "reset":
                resetCounter()
                break
            case "set":
                setValues()
                break
        }
    }

    return (
        <div className={s.btn_container}>
            <button className={`${s.btn} ${disabledBtns ? s.btn_disabled : ''}`}
                    disabled={disabledBtns}
                    onClick={kindBtn}>
                {props.btn}
            </button>
        </div>
    )
}

