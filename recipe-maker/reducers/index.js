//list of commands from the actions folder that will be used within the redux store
import {} from "../actions"


const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                //what is the state going to be when the user logins
            }
            default:
            return state;
        }
}