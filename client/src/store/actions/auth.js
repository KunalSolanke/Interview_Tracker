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

const authLogout = (state,action) => {
    localStorage.removeItem("token")
    return {
        type: authActions.AUTH_LOGOUT,
    }
}




export const authLogin = ({username,password})=>{
    return (dispatch) =>{
            dispatch(authStart()) ;
            axios.post("http://localhost:3001/accounts/login",{username,password}).then(response=>{
                   let token = response.data.token;
                localStorage.setItem("token",token)
                dispatch(authSuccess(response)) ;
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
                localStorage.setItem("token",token)
                dispatch(authSuccess(response)) ;
            }).catch(err=>{
                console.log(err.response.data) ;
                dispatch(authFail(err.response.data))
            })
    }
}
