import * as authActions from '../constants/auth.js'
import axios from 'axios'

export const authStart = () => {
    return {
        type: authActions.AUTH_START
    }
}

export const authSuccess = (data) => {
    return {
        type: authActions.AUTH_SUCCESS,
        payload: data,
    }
}

export const authFail = (data) => {
    return {
        type: authActions.AUTH_FAIL,
        payload: data,
    }
}

export const authLogout = (state,action) => {
    localStorage.removeItem("token")
    return {
        type: authActions.AUTH_LOGOUT,
    }
}




export const authLogin = ({password,email})=>{
    return (dispatch) =>{
            dispatch(authStart()) ;
            axios.post("http://localhost:3001/accounts/login",{email,password}).then(response=>{
                let token = response.data.token;
                localStorage.setItem("token",token)
                dispatch(authSuccess(response.data));   
            }).catch(err=>{
                console.log(err.response.data) ;
                dispatch(authFail(err.response.data))
            })
     }
}



export const authRegister = ({username,email,password})=>{
    return (dispatch) =>{
            dispatch(authStart()) ;
            axios.post("http://localhost:3001/accounts/signup",{username,email,password}).then(response=>{
                   let token = response.data.token;
                   console.log("sennding post req....",response.data)
                localStorage.setItem("token",token)
                const data = {
                    username,email,token
                }
                dispatch(authSuccess(data)) ;   
            }).catch(err=>{
                console.log(err.response.data) ;
                dispatch(authFail(err.response.data))
            })
    }
}
