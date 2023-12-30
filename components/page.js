import { renderHeader } from "./header.js";
import { fromHTML } from "./utils.js";

export const renderPage = (...children) => {
    const element = fromHTML(`
        <div class="page-container">
        </div>`);
    element.append(renderHeader(), ...children);
    return element;
};
