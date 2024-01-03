const effectMap = new Map();

export const registerEffect = (handler, key) => {
    let handlerList = effectMap.get(key);
    if(!handlerList){
        handlerList = [];
        effectMap.set(key, handlerList);
    }
    handlerList.push(handler);
}

export const fireEffect = (key) => {
    let handlerList = effectMap.get(key);
    if(!handlerList){
        return;
    }
    for (let i = 0; i < handlerList.length; i++) {
        handlerList[i]();        
    }
}

export const clearEffects = () => effectMap.clear();