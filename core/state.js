import { fireEffect } from "./effect.js";
import { scheduleRenderRoot } from "./render.js";

export function createState (initialValue) {
    let value = initialValue;
    
    const result = {        
        set(v){
            value = v;
            scheduleRenderRoot();
            fireEffect(this);
        },
        get(){
            return value;
        }
    }
    
    return result;
}