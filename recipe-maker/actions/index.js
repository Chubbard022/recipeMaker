export const 
    LOGIN = "LOGIN",
    REGISTER = 'REGISTER'





const URL = "URL FOR SERVER"



export const register = creds => dispatch => {
    auth()
        .post(`${URL}/register`, creds)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(creds))
            dispatch({
                type: REGISTER,
                payload: res.data
            })
        })
}

export const login= () =>{

}