import React from "react";
import s from "./Btn.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {actionsType, EditMinMaxValuerAC, IncreaseCounterAC} from "../../../redux/actions";
import {AppRootState} from "../../../redux/redux-store";
import {initialStateType} from "../../../redux/counter-reducer";

type BtnPropsType = {
    btn: "inc" | "reset" | "set"
}

export const Btn = (props: BtnPropsType) => {
    const dispatch = useDispatch<Dispatch<actionsType>>()
    const counter = useSelector<AppRootState, initialStateType>(state => state.counter)

    const disabledSet = props.btn === "set" && !counter.editMinMaxValue
    const disabledIncReset = props.btn !== "set" && counter.editMinMaxValue || counter.errorMessage
    const disabledInc = props.btn === "inc" && counter.counter === counter.maxValue

    const disabledBtns = disabledSet || disabledInc || disabledIncReset

    const kindBtn = () => {
        switch (props.btn) {
            case 'inc':
                counter.counter < counter.maxValue && dispatch(IncreaseCounterAC(counter.counter + 1))
                break
            case 'reset':
                dispatch(IncreaseCounterAC(counter.minValue))
                break
            case 'set':
                dispatch(EditMinMaxValuerAC(false))
                break
        }
    }

    return (
        <div className={s.btn_container}>
            <button className={`${s.btn} ${disabledBtns && s.btn_disabled}`}
                    onClick={kindBtn}
                    disabled={disabledBtns}
            >
                {props.btn}
            </button>
        </div>
    )
}

