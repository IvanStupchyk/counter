import React, {ChangeEvent, useEffect} from "react";
import s from "./ValueSettings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    actionsType,
    ChangeConditionErrorAC,
    ChangeMaxValueAC,
    ChangeMinValueAC,
    EditMinMaxValuerAC
} from "../../../redux/actions";
import {AppRootState} from "../../../redux/redux-store";
import {initialStateType} from "../../../redux/counter-reducer";

export const ValueSettings = React.memo(() => {
    const dispatch = useDispatch<Dispatch<actionsType>>()
    const counter = useSelector<AppRootState, initialStateType>(state => state.counter)

    useEffect(() => {
        counter.minValue >= counter.maxValue || counter.minValue < 0 || counter.maxValue <= 0 ? dispatch(ChangeConditionErrorAC(true)) : dispatch(ChangeConditionErrorAC(false))
    }, [counter.minValue, counter.maxValue])

    const classNameInput = `${s.input_value} ${counter.errorMessage ? s.incorrect_value : ''}`

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMaxValueAC(+e.currentTarget.value))
        dispatch(EditMinMaxValuerAC(true))
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMinValueAC(+e.currentTarget.value))
        dispatch(EditMinMaxValuerAC(true))
    }

    return (
        <div className={s.value_container}>
            <div className={s.values_position}>
                <p>max value:</p>
                <input type={"number"}
                       className={classNameInput}
                       value={counter.maxValue}
                       onChange={changeMaxValue}
                />
            </div>

            <div className={s.values_position}>
                <p>start value:</p>
                <input type={"number"}
                       className={classNameInput}
                       value={counter.minValue}
                       onChange={changeMinValue}
                />
            </div>
        </div>
    )
})