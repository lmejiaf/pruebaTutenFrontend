
import {PROBLEMA2} from "./actionTypes"


export function problema2Fetch(payload){
    return {
        type: PROBLEMA2.Fetching,
        payload
    }
}
export function problema2Success(payload){
    return {
        type: PROBLEMA2.success,
         payload
    }
}
export function problema2Failed(error){
    return {
        type: PROBLEMA2.failed,
        error
    }
}