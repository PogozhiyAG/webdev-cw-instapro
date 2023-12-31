import { clearEffects } from "./effect.js";

let rootElement;
export const setRootElement = element => rootElement = element;

let rootRenderFunction;
export const mountRootComponent = rootComponentFunction => {
    clearEffects();
    rootRenderFunction = rootComponentFunction();
    scheduleRenderRoot();
}

const renderRoot = () => {     
    if(rootRenderFunction) {
        rootElement.replaceChildren(rootRenderFunction());
    }
};

//защита от over rendering'а
let renderTimeout;
export const scheduleRenderRoot = () => {
    clearTimeout(renderTimeout);
    renderTimeout = setTimeout(renderRoot, 3);
}