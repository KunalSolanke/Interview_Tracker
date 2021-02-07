import * as authActions from '../constants/auth.js'
import axios from 'axios'
import baseUrl from '../../http/api'

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

export const authLogout = () => {
    localStorage.removeItem("token")
    return {
        type: authActions.AUTH_LOGOUT,
    }
}

export const getProfileRequest = () => {
    return {
        type: authActions.GET_PROFILE_REQUEST,
    }
}

export const getProfileSuccess = (data) => {
    return {
        type: authActions.GET_PROFILE_SUCCESS,
        payload : data
    }
}

export const updateProfileRequest = () => {
  return {
    type: authActions.PROFILE_UPDATE_REQUEST,
  };
};

export const updateProfileSuccess = (data) => {
  return {
    type: authActions.PROFILE_UPDATE_SUCCESS,
    payload: data,
  };
};







export const getProfile = ()=>{
    return (dispatch) =>{
            dispatch(getProfileRequest()) ;
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            axios.defaults.headers["Authorization"]=`Token ${token}` ;
            axios.get(`${baseUrl}/accounts/profile`).then(response=>{
                console.log(response)
                dispatch(getProfileSuccess(response.data))
            }).catch(err=>{
                console.log(err) ;
                dispatch(authFail(err))
            })
    }
}


export const updateProfile = (data)=>{
      console.log('entering here')
    return (dispatch) =>{
        
            dispatch(updateProfileRequest()) ;
            console.log('entering here')
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            axios.defaults.headers["Authorization"]=`Token ${token}` ;
            axios.post(`${baseUrl}/accounts/profile`,data).then(response=>{
                console.log(response)
                dispatch(getProfileSuccess(response.data))
            }).catch(err=>{
                console.log(err) ;
                dispatch(authFail(err))
            })
    }
}


export const authLogin = ({password,email})=>{
    return (dispatch) =>{
            dispatch(authStart()) ;
            axios.post(`${baseUrl}/accounts/login`,{email,password}).then(response=>{
                let token = response.data.token;
                localStorage.setItem("token",token)
                dispatch(authSuccess(response.data));
                dispatch(getProfile(token))  
            }).catch(err=>{
                console.log(err) ;
                dispatch(authFail(err))
            })
     }
}



export const authRegister = ({username,email,password})=>{
    return (dispatch) =>{
            dispatch(authStart()) ;
            axios.post(`${baseUrl}/accounts/signup`,{username,email,password}).then(response=>{
                   let token = response.data.token;
                   console.log("sennding post req....",response.data)
                localStorage.setItem("token",token)
                const data = {
                    username,email,token
                }
                dispatch(authSuccess(data)) ; 
                dispatch(getProfile(token))  
            }).catch(err=>{
                console.log(err) ;
                dispatch(authFail(err))
            })
    }
}

