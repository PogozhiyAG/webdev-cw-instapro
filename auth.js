import { createState } from "./core/state.js";

const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(window.localStorage.user);
    } catch (error) {
        return null;
    }
};

export let userState = createState(getUserFromLocalStorage());

export const setUser = value => {
    userState.set(value);
    if (value) {
        window.localStorage.user = JSON.stringify(userState.get());
    } else {
        delete window.localStorage.user;
    }    
};
