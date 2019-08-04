//list of commands from the actions folder that will be used within the redux store
 import {LOGIN} from "../actions"


const initialState = {
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            break;
            default:
            return state;
        }
}

