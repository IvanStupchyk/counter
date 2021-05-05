import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";

export const App = () => {
    return (
        <div className="App">
            <CounterSettings/>
            <Counter/>
        </div>
    );
}

