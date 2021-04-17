import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";

export const App = () => {
    const JsonValues = localStorage.getItem('Counter Values')
    const CounterValues = JsonValues && JSON.parse(JsonValues)

    const [intermediateMinValue, setIntermediateMinValue] = useState<number>(CounterValues ? CounterValues.minValue : 0)
    const [intermediateMaxValue, setIntermediateMaxValue] = useState<number>(CounterValues ? CounterValues.maxValue : 5)

    const [minValue, setMinValue] = useState<number>(intermediateMinValue)
    const [maxValue, setMaxValue] = useState<number>(intermediateMaxValue)

    const [counter, setCounter] = useState<number>(minValue)

    const [changeValue, setChangeValue] = useState<boolean>(false)

    const getStateValues = (state: boolean) => setChangeValue(state)

    const increaseCounter = () => counter < maxValue && setCounter(prev => prev + 1)

    const inputMaxError = intermediateMaxValue < 0 || intermediateMaxValue <= intermediateMinValue
    const inputMinError = intermediateMinValue < 0 || intermediateMinValue >= intermediateMaxValue
    const errorMessage = inputMinError || inputMaxError

    const resetCounter = () => setCounter(minValue)

    const changeMaxValue = (value: string) => setIntermediateMaxValue(+value)

    const changeMinValue = (value: string) => setIntermediateMinValue(+value)

    const setValues = () => {
        if (!errorMessage) {
            setMinValue(intermediateMinValue)
            setMaxValue(intermediateMaxValue)
            setCounter(intermediateMinValue)
            getStateValues(false)
        }
    }

    return (
        <div className="App">
            <CounterSettings
                intermediateMinValue={intermediateMinValue}
                intermediateMaxValue={intermediateMaxValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                setValues={setValues}
                maxValue={maxValue}
                minValue={minValue}
                inputMaxError={inputMaxError}
                inputMinError={inputMinError}
                errorMessage={errorMessage}
                getStateValues={getStateValues}
                changeValue={changeValue}
            />
            <Counter counter={counter}
                     increaseCounter={increaseCounter}
                     resetCounter={resetCounter}
                     maxValue={maxValue}
                     minValue={minValue}
                     intermediateMinValue={intermediateMinValue}
                     intermediateMaxValue={intermediateMaxValue}
                     inputMaxError={inputMaxError}
                     inputMinError={inputMinError}
                     changeValue={changeValue}
            />
        </div>
    );
}

