import { fromHTML } from "./render.js";

export const renderLoading = () =>
    fromHTML(`
        <div class="loading-container">
            <div class="loading-page">
                <div class="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>`);
