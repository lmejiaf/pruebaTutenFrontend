
import {PROBLEMA2} from "./actionTypes"

const initialState = {
    isFetch: false,
    data: null,
    error: null
}
export function problema2Reducer(state = initialState, action) {

    
    switch (action.type) {
        case PROBLEMA2.Fetching:
            return{
                ...state,
                isFetch:true,
                error:null
            }
        case PROBLEMA2.success:
            return{
                ...state,
                isFetch:false,
                data: action.payload
            }
        case PROBLEMA2.failed:
            return{
                ...state,
                isFetch:false,
                error:action.error
            }

        default:
            return {...state}
            break;
    }

}