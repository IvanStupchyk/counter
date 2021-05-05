import {AppRootState} from "../redux/redux-store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter-values');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-values', serializedState);
    } catch {

    }
};