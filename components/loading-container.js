import { fromHTML } from "./render.js";

export const loadingContainer = contentPromise => {
    const container = fromHTML(`
        <div class="loading-container">
            <div class="loading-page">
                <div class="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>`);

    //TODO: reaction on a error
    contentPromise.then(content => {
        container.replaceChildren(content);
    });

    return container;
};
