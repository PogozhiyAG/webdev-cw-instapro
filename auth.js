const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(window.localStorage.user);
    } catch (error) {
        return null;
    }
};

export let user = getUserFromLocalStorage();

export const setUser = value => {
    user = value;
    if (value) {
        window.localStorage.user = JSON.stringify(user);
    } else {
        delete window.localStorage.user;
    }
};
