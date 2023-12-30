import { fireEffect } from "./effect.js";
import { renderRoot } from "./render.js";

export function createState (initialValue) {
    let value = initialValue;
    
    const result = {        
        set(v){
            value = v;
            fireEffect(this);
            renderRoot();
        },
        get(){
            return value;
        }
    }
    
    return result;
}