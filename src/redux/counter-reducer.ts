import {actionsType} from "./actions";

export type initialStateType = {
    minValue: number
    maxValue: number
    counter: number
    editMinMaxValue: boolean
    errorMessage: boolean
}

let initialState: initialStateType = {
    minValue: 0,
    maxValue: 5,
    counter: 0,
    editMinMaxValue: false,
    errorMessage: false
}

export const counterReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    return action.type ? {...state, ...action.payload} : state
}