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

export const getProfileRequest = (state,action) => {
    return {
        type: authActions.GET_PROFILE_REQUEST,
    }
}

export const getProfileSuccess = (state,action) => {
    return {
        type: authActions.GET_PROFILE_SUCCESS,
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



export const getProfile = ()=>{
    return (dispatch) =>{
            dispatch(getProfileRequest()) ;
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            axios.defaults.headers["Authorization"]=token ;
            axios.get("http://localhost:3001/acco").then(response=>{
                g
            }).catch(err=>{
                console.log(err.response.data) ;
                dispatch(authFail(err.response.data))
            })
    }
}