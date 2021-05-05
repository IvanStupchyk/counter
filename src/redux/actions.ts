export enum COUNTER_ACTIONS {
    'CHANGE_MIN_VALUE' = 'counter/actions/change-min-value',
    'CHANGE_MAX_VALUE' = 'counter/actions/change-max-value',
    'INCREASE_COUNTER' = 'counter/actions/increase-counter',
    'CHANGE_CONDITION_ERROR' = 'counter/actions/change-condition-error',
    'EDIT_MIN_MAX_VALUE' = 'counter/actions/edit-min-max-value',
}

type ChangeMinValueType = {
    type: COUNTER_ACTIONS.CHANGE_MIN_VALUE
    payload: {minValue: number}
}

export const ChangeMinValueAC = (minValue: number): ChangeMinValueType => {
    return {
        type: COUNTER_ACTIONS.CHANGE_MIN_VALUE,
        payload: {minValue}
    }
}

type ChangeMaxValueType = {
    type: COUNTER_ACTIONS.CHANGE_MAX_VALUE
    payload: {maxValue: number}
}

export const ChangeMaxValueAC = (maxValue: number): ChangeMaxValueType => {
    return {
        type: COUNTER_ACTIONS.CHANGE_MAX_VALUE,
        payload: {maxValue}
    }
}

type IncreaseCounterType = {
    type: COUNTER_ACTIONS.INCREASE_COUNTER
    payload: {counter: number}
}

export const IncreaseCounterAC = (counter: number): IncreaseCounterType => {
    return {
        type: COUNTER_ACTIONS.INCREASE_COUNTER,
        payload: {counter}
    }
}

type ChangeConditionErrorType = {
    type: COUNTER_ACTIONS.CHANGE_CONDITION_ERROR
    payload: {errorMessage: boolean}
}

export const ChangeConditionErrorAC = (errorMessage: boolean): ChangeConditionErrorType => {
    return {
        type: COUNTER_ACTIONS.CHANGE_CONDITION_ERROR,
        payload: {errorMessage}
    }
}

type EditMinMaxValueType = {
    type: COUNTER_ACTIONS.EDIT_MIN_MAX_VALUE
    payload: {editMinMaxValue: boolean}
}

export const EditMinMaxValuerAC = (editMinMaxValue: boolean): EditMinMaxValueType => {
    return {
        type: COUNTER_ACTIONS.EDIT_MIN_MAX_VALUE,
        payload: {editMinMaxValue}
    }
}

export type actionsType = ChangeMinValueType | ChangeMaxValueType | IncreaseCounterType | ChangeConditionErrorType | EditMinMaxValueType