import {actionsType, COUNTER_ACTIONS} from "./actions";

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


// export const counterReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
//     return action.type ? {...state, ...action.payload} : state
// }


type converterType = {
    [key in COUNTER_ACTIONS | 'DEFAULT']: (state: initialStateType, action: actionsType) => initialStateType
}

const converters: converterType = {
    [COUNTER_ACTIONS.CHANGE_MIN_VALUE]: (state: initialStateType, action: actionsType) => {
        return {...state, ...action.payload}
    },
    [COUNTER_ACTIONS.CHANGE_MAX_VALUE]: (state: initialStateType, action: actionsType) => {
        return {...state, ...action.payload}
    },
    [COUNTER_ACTIONS.EDIT_MIN_MAX_VALUE]: (state: initialStateType, action: actionsType) => {
        return {...state, ...action.payload}
    },
    [COUNTER_ACTIONS.CHANGE_CONDITION_ERROR]: (state: initialStateType, action: actionsType) => {
        return {...state, ...action.payload}
    },
    [COUNTER_ACTIONS.INCREASE_COUNTER]: (state: initialStateType, action: actionsType) => {
        return {...state, ...action.payload}
    },
    DEFAULT: (state: initialStateType) => state,
}

export const counterReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    const converter = converters[action.type] || converters.DEFAULT

    return converter(state, action)
}
