import { clearEffects } from "./effect.js";

let rootElement;
let rootRenderFunction;

export const setRootElement = element => rootElement = element;

export const mountRootComponent = rootComponentFunction => {
    clearEffects();
    rootRenderFunction = rootComponentFunction();
}

export const renderRoot = () => rootElement.replaceChildren(rootRenderFunction());