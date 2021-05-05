import React, {useMemo} from "react";
import s from "./Scoreboard.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../redux/redux-store";
import {initialStateType} from "../../../redux/counter-reducer";
import {Dispatch} from "redux";
import {actionsType, IncreaseCounterAC} from "../../../redux/actions";


export const Scoreboard = () => {
    const dispatch = useDispatch<Dispatch<actionsType>>()
    const counter = useSelector<AppRootState, initialStateType>(state => state.counter)

    const messageClass = `${s.message_set_value} ${counter.errorMessage && s.limit}`
    const counterClass = `${s.amount} ${counter.counter === counter.maxValue && s.limit}`

    const textMessage = counter.editMinMaxValue && (counter.errorMessage ? 'Incorrect value!' : 'Enter values and press \'set\'')

    useMemo( () => {
        dispatch(IncreaseCounterAC(counter.minValue))
    }, [counter.editMinMaxValue])

    return (
        <div className={s.scoreboard_container}>
            <span className={counterClass}>
                {!counter.editMinMaxValue && counter.counter }
            </span>
            <p className={messageClass}>{textMessage}</p>
        </div>
    )
}
