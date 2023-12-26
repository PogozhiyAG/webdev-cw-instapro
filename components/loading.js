import { fromHTML } from "./render.js";

export const renderLoading = () => {
    return fromHTML(
        `<div class="loading-page">
            <div class="loader">
            <div></div>
            <div></div>
            <div></div>
        </div>`
    );
};
