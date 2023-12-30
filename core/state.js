import { fireEffect } from "./effect.js";
import { renderRoot } from "./render.js";

export function createState (initialValue) {
    let value = initialValue;
    
    const result = {        
        set(v, omitRender){
            value = v;
            fireEffect(this);
            if(!omitRender){
                renderRoot();
            }            
        },
        get(){
            return value;
        }
    }
    
    return result;
}