import { createState } from "./core/state.js";

const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(window.localStorage.user);
    } catch (error) {
        return null;
    }
};

export let user = createState(getUserFromLocalStorage());

export const setUser = value => {
    user.set(value);
    if (value) {
        window.localStorage.user = JSON.stringify(user.get());
    } else {
        delete window.localStorage.user;
    }    
};
